"""Build browser-decryptable study assets. Password is passed at runtime only."""
from __future__ import annotations
import argparse, base64, json, os
from pathlib import Path
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'专题题库'/'assets'
SOURCES=[
 ('ds-choice','408教辅题库','数据结构·选择题',r'E:\BaiduNetdiskDownload\王道课后题【做题本】\数据结构\题本\【A4留白】27王道《数据结构》 - 选择部分.pdf',['绪论','线性表','栈、队列和数组','串','树与二叉树','图','查找','排序']),
 ('ds-long','408教辅题库','数据结构·综合题',r'E:\BaiduNetdiskDownload\王道课后题【做题本】\数据结构\题本\【A4留白】27王道《数据结构》 - 解答题部分.pdf',['线性表','树与二叉树','图','查找','排序']),
 ('co-choice','408教辅题库','组成原理·选择题',r'E:\BaiduNetdiskDownload\王道课后题【做题本】\计算机组成原理\题本\【A4留白】计算机组成原理选择题做题本.pdf',['计算机系统概述','数据的表示和运算','存储系统','指令系统','中央处理器','总线','输入输出系统']),
 ('co-long','408教辅题库','组成原理·综合题',r'E:\BaiduNetdiskDownload\王道课后题【做题本】\计算机组成原理\题本\【A4留白】计算机组成原理综合题做题本.pdf',['数据的表示和运算','存储系统','指令系统','中央处理器','总线','输入输出系统']),
 ('os-choice','408教辅题库','操作系统·选择题',r'E:\BaiduNetdiskDownload\王道课后题【做题本】\操作系统\题本\【A4留白】操作系统选择题做题本.pdf',['计算机系统概述','进程与线程','内存管理','文件管理','输入输出管理']),
 ('os-long','408教辅题库','操作系统·综合题',r'E:\BaiduNetdiskDownload\王道课后题【做题本】\操作系统\题本\【A4留白】27王道操作系统综合题做题本.pdf',['进程同步与调度','死锁','内存管理','文件系统','磁盘调度']),
 ('net-choice','408教辅题库','计算机网络·选择题',r'E:\BaiduNetdiskDownload\王道课后题【做题本】\计算机网络\题本\【A4有留白】王道计算机网络选择题.pdf',['计算机网络体系结构','物理层','数据链路层','网络层','传输层','应用层']),
 ('net-long','408教辅题库','计算机网络·综合题',r'E:\BaiduNetdiskDownload\王道课后题【做题本】\计算机网络\题本\【A4留白】计算机网络综合题做题本.pdf',['数据链路层','网络层','传输层','应用层']),
 ('math1000-q','数学二教辅题库','1000题·试题册',r'E:\BaiduNetdiskDownload\张宇考研题本\27张宇1000题\数二\27张宇1000题数二-试题册.pdf',['基础篇·高等数学','基础篇·线性代数','强化篇·高等数学','强化篇·线性代数','综合测试卷一','综合测试卷二','综合测试卷三','综合测试卷四']),
 ('math1000-a','数学二教辅题库','1000题·解析册',r'E:\BaiduNetdiskDownload\张宇考研题本\27张宇1000题\数二\27张宇1000题数二-解析册.pdf',['基础篇解析','强化篇解析','综合篇解析']),
 ('math30','数学二教辅题库','基础30讲·高等数学题本',r'E:\BaiduNetdiskDownload\张宇考研题本\27张宇《基础30讲》做题本\数二\【A4留白】27张宇基础30讲做题本.pdf',['函数极限与连续','数列极限','一元函数微分学的概念','一元函数微分学的计算','微分学的几何应用','中值定理与微分不等式','微分学的物理应用','积分学的概念与性质','一元函数积分学的计算','积分学的几何应用','积分等式与积分不等式','积分学的物理应用','多元函数微分学','二重积分','微分方程']),
 ('math30-linear','数学二教辅题库','基础30讲·线性代数题目参考',str(ROOT/'tmp'/'math30-linear-reference.pdf'),['行列式','矩阵','向量组','线性方程组','矩阵的特征值与特征向量','相似矩阵','二次型','线性空间基础','综合训练']),
 ('math36','数学二教辅题库','强化36讲·高数与线代题本',r'E:\BaiduNetdiskDownload\张宇考研题本\27张宇《强化36讲》做题本\数二\【A4】36讲数二高数线代例题做题本.pdf',['高数01·函数极限与连续','高数02·数列极限','高数03·一元函数微分学的概念','高数04·一元函数微分学的计算','高数05·微分学的几何应用','高数06·中值定理与微分不等式','高数07·微分学的物理应用','高数08·积分学的概念与性质','高数09·一元函数积分学的计算','高数10·积分学的几何应用','高数11·积分等式与积分不等式','高数12·积分学的物理应用','高数13·多元函数微分学','高数14·二重积分','高数15·微分方程','线代01·行列式','线代02·余子式与代数余子式','线代03·矩阵运算','线代04·矩阵的秩','线代05·线性方程组','线代06·向量组','线代07·特征值与特征向量','线代08·相似理论','线代09·二次型']),
]

def b64(value:bytes)->str:return base64.b64encode(value).decode('ascii')
def main():
 parser=argparse.ArgumentParser();parser.add_argument('--password',required=True);args=parser.parse_args()
 OUT.mkdir(parents=True,exist_ok=True);salt=os.urandom(16);iterations=250000
 key=PBKDF2HMAC(algorithm=hashes.SHA256(),length=32,salt=salt,iterations=iterations).derive(args.password.encode())
 aes=AESGCM(key);manifest=[]
 check_iv=os.urandom(12);check=aes.encrypt(check_iv,b'xiaotie-library-ok',None)
 for asset_id,group,title,raw,chapters in SOURCES:
  source=Path(raw)
  if not source.exists(): raise FileNotFoundError(source)
  iv=os.urandom(12);cipher=aes.encrypt(iv,source.read_bytes(),None);target=OUT/f'{asset_id}.bin';target.write_bytes(cipher)
  manifest.append({'id':asset_id,'group':group,'title':title,'chapters':chapters,'file':f'assets/{target.name}','iv':b64(iv),'bytes':source.stat().st_size})
 config={'salt':b64(salt),'iterations':iterations,'checkIv':b64(check_iv),'check':b64(check),'resources':manifest}
 (ROOT/'专题题库'/'resources.js').write_text('window.PROTECTED_LIBRARY='+json.dumps(config,ensure_ascii=False,separators=(',',':'))+';\n',encoding='utf-8')
 print('\n'.join(f'{r["title"]}: {r["bytes"]}' for r in manifest))
if __name__=='__main__':main()
