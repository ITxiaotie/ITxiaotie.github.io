window.MATH2_EXAMS = [
  {
    "year": 2016,
    "videoPage": 2,
    "items": [
      {
        "id": "math2-2016-1",
        "year": 2016,
        "number": 1,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "等价无穷小与泰勒展开",
        "question": "设 \\(a_{1}=x\\left(\\cos\\sqrt{x}-1\\right)\\)，\\(a_{2}=\\sqrt{x}\\ln\\left(1+\\sqrt[3]{x}\\right)\\)，\\(a_{3}=\\sqrt[3]{x+1}-1\\)。当 \\(x\\to 0^{+}\\) 时，以上 \\(3\\) 个无穷小量按照从低阶到高阶的排序是：\n（A）\\(a_{1},a_{2},a_{3}\\)。\n（B）\\(a_{2},a_{3},a_{1}\\)。\n（C）\\(a_{2},a_{1},a_{3}\\)。\n（D）\\(a_{3},a_{2},a_{1}\\)。",
        "answer": "（B）",
        "keyFormulas": [
          "x\\to 0^{+}",
          "a_{1}\\sim-\\frac12x^{2},\\qquad\na_{2}\\sim x^{5/6},\\qquad\na_{3}\\sim \\frac13x.",
          "a_{2},a_{3},a_{1}"
        ],
        "guide": {
          "concept": "先看每一项在趋近点附近的最低非零次幂。老师在视频里强调：比较阶数时系数通常不重要，但正负号、幂次和趋近条件绝不能口算带过。",
          "method": "把根式、对数、指数、三角函数逐个换成标准等价式；若相减造成低阶项抵消，就立即改用泰勒展开，写到第一个不为零的项。最后只比较幂指数。",
          "pitfall": "最容易把 1-cos x 与 cos x-1 的符号写反，或在加减结构中违规直接做等价替换。先确认替换对象整体趋于0。",
          "extension": "同一知识点还会考极限值、无穷小阶数排序、参数确定和泰勒系数。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648732",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=2",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2016-2",
        "year": 2016,
        "number": 2,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "连续、间断与渐近线",
        "question": "已知函数 \\(f(x)\\) 满足：\n\\[f(x)=\n\\begin{cases}\n2(x-1), & x<1,\\\\\n\\ln x, & x\\geqslant 1.\n\\end{cases}\n\\]\n则 \\(f(x)\\) 的一个原函数是：\n（A）\\(x<1\\) 时，\\(F(x)=(x-1)^2\\)；\\(x\\geqslant 1\\) 时，\\(F(x)=x(\\ln x-1)\\)。\n（B）\\(x<1\\) 时，\\(F(x)=(x-1)^2\\)；\\(x\\geqslant 1\\) 时，\\(F(x)=x(\\ln x+1)-1\\)。\n（C）\\(x<1\\) 时，\\(F(x)=(x-1)^2\\)；\\(x\\geqslant 1\\) 时，\\(F(x)=x(\\ln x+1)+1\\)。\n（D）\\(x<1\\) 时，\\(F(x)=(x-1)^2\\)；\\(x\\geqslant 1\\) 时，\\(F(x)=x(\\ln x-1)+1\\)。",
        "answer": "（D）",
        "keyFormulas": [
          "x<1",
          "F(x)=(x-1)^2",
          "x>1",
          "F(x)=x\\ln x-x+C",
          "F(1^-)=F(1^+)",
          "C=1"
        ],
        "guide": {
          "concept": "先列出所有可能出问题的点：分母为0、对数真数不正、根式越界以及分段点。连续要求极限存在并等于函数值。",
          "method": "对每个候选点分别算左右极限；渐近线则按垂直、水平、斜渐近线三类依次检查，斜渐近线用 k=lim f(x)/x、b=lim[f(x)-kx]。",
          "pitfall": "函数在点处有定义不代表连续；无定义也不代表一定是无穷间断。渐近线要区分 x→+∞ 与 x→-∞。",
          "extension": "相邻考法包括原函数存在性、可导与连续关系、间断点分类。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648732",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=2",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2016-3",
        "year": 2016,
        "number": 3,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "一元积分",
        "question": "反常积分\n\\[(1) \\ \\int_{-\\infty}^{0}\\frac{e^{1/x}}{x^{2}}\\,\\mathrm{d}x,\\qquad\n(2) \\ \\int_{0}^{+\\infty}\\frac{e^{1/x}}{x^{2}}\\,\\mathrm{d}x\n\\]\n的敛散性为：\n（A）(1) 收敛，(2) 收敛。\n（B）(1) 收敛，(2) 发散。\n（C）(1) 发散，(2) 收敛。\n（D）(1) 发散，(2) 发散。",
        "answer": "（B）",
        "keyFormulas": [
          "u=\\frac1x",
          "\\int\\frac{e^{1/x}}{x^2}\\,\\mathrm{d}x=-e^{1/x}."
        ],
        "guide": {
          "concept": "先看结构再选方法：复合函数配导数用换元，乘积中一项求导变简单用分部积分，有理函数先做代数分解。",
          "method": "写出换元变量与新上下限；反常积分先把瑕点或无穷端点改写成极限；变上限积分先用微积分基本定理求导。",
          "pitfall": "不定积分别漏常数C；分段函数的原函数在分段点还必须连续；反常积分算出原函数不等于已经收敛，必须看极限。",
          "extension": "相邻考法包括积分比较、面积体积、积分不等式和含参积分。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648732",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=2",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2016-4",
        "year": 2016,
        "number": 4,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "连续、间断与渐近线",
        "question": "设函数 \\(f(x)\\) 在 \\((-\\infty,+\\infty)\\) 内连续，其导函数的图形如图所示，则：\n（A）函数 \\(f(x)\\) 有 \\(2\\) 个极值点，曲线 \\(y=f(x)\\) 有 \\(2\\) 个拐点。\n（B）函数 \\(f(x)\\) 有 \\(2\\) 个极值点，曲线 \\(y=f(x)\\) 有 \\(3\\) 个拐点。\n（C）函数 \\(f(x)\\) 有 \\(3\\) 个极值点，曲线 \\(y=f(x)\\) 有 \\(1\\) 个拐点。\n（D）函数 \\(f(x)\\) 有 \\(3\\) 个极值点，曲线 \\(y=f(x)\\) 有 \\(2\\) 个拐点。",
        "answer": "（B）",
        "keyFormulas": [
          "f'(x)"
        ],
        "guide": {
          "concept": "先列出所有可能出问题的点：分母为0、对数真数不正、根式越界以及分段点。连续要求极限存在并等于函数值。",
          "method": "对每个候选点分别算左右极限；渐近线则按垂直、水平、斜渐近线三类依次检查，斜渐近线用 k=lim f(x)/x、b=lim[f(x)-kx]。",
          "pitfall": "函数在点处有定义不代表连续；无定义也不代表一定是无穷间断。渐近线要区分 x→+∞ 与 x→-∞。",
          "extension": "相邻考法包括原函数存在性、可导与连续关系、间断点分类。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648732",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=2",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2016-5",
        "year": 2016,
        "number": 5,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "连续、间断与渐近线",
        "question": "设函数 \\(f_i(x)\\ (i=1,2)\\) 具有二阶连续导数，且 \\(f_i''(x_0)<0\\ (i=1,2)\\)。若两条曲线 \\(y=f_i(x)\\ (i=1,2)\\) 在点 \\((x_0,y_0)\\) 处具有公切线 \\(y=g(x)\\)，且在该点处曲线 \\(y=f_1(x)\\) 的曲率大于曲线 \\(y=f_2(x)\\) 的曲率，则在 \\(x_0\\) 的某个邻域内，有：\n（A）\\(f_1(x)\\leqslant f_2(x)\\leqslant g(x)\\)。\n（B）\\(f_2(x)\\leqslant f_1(x)\\leqslant g(x)\\)。\n（C）\\(f_1(x)\\leqslant g(x)\\leqslant f_2(x)\\)。\n（D）\\(f_2(x)\\leqslant g(x)\\leqslant f_1(x)\\)。",
        "answer": "（A）",
        "keyFormulas": [
          "f_i''(x_0)<0",
          "x_0",
          "f_i(x)\\leqslant g(x)",
          "f_1''(x_0)<f_2''(x_0)<0",
          "f_1(x)\\leqslant f_2(x)"
        ],
        "guide": {
          "concept": "先列出所有可能出问题的点：分母为0、对数真数不正、根式越界以及分段点。连续要求极限存在并等于函数值。",
          "method": "对每个候选点分别算左右极限；渐近线则按垂直、水平、斜渐近线三类依次检查，斜渐近线用 k=lim f(x)/x、b=lim[f(x)-kx]。",
          "pitfall": "函数在点处有定义不代表连续；无定义也不代表一定是无穷间断。渐近线要区分 x→+∞ 与 x→-∞。",
          "extension": "相邻考法包括原函数存在性、可导与连续关系、间断点分类。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648732",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=2",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2016-6",
        "year": 2016,
        "number": 6,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "多元函数微分",
        "question": "已知函数 \\(f(x,y)=\\dfrac{e^{x}}{x-y}\\)，则：\n（A）\\(f'_x-f'_y=0\\)。\n（B）\\(f'_x+f'_y=0\\)。\n（C）\\(f'_x-f'_y=f\\)。\n（D）\\(f'_x+f'_y=f\\)。",
        "answer": "（D）",
        "keyFormulas": [
          "f'_x=\\frac{e^x(x-y)-e^x}{(x-y)^2},\\qquad\nf'_y=\\frac{e^x}{(x-y)^2}.",
          "f'_x+f'_y=\\dfrac{e^x}{x-y}=f"
        ],
        "guide": {
          "concept": "多元题先区分偏导数、方向导数、全微分和复合函数链式法则。偏导存在不自动推出连续或可微。",
          "method": "画依赖关系：外层变量对中间变量求偏导，中间变量再对自变量求导；每条路径的乘积相加。指定点最后再代入。",
          "pitfall": "二阶混合偏导只有在相应连续条件下才能随意交换次序；沿坐标轴极限不能代替二元极限。",
          "extension": "相邻考法包括极值、条件极值、切平面与法线。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648732",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=2",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2016-7",
        "year": 2016,
        "number": 7,
        "kind": "单项选择题",
        "subject": "线性代数",
        "topic": "特征值、特征向量与相似",
        "question": "设 \\(\\boldsymbol{A}\\)，\\(\\boldsymbol{B}\\) 是可逆矩阵，且 \\(\\boldsymbol{A}\\) 与 \\(\\boldsymbol{B}\\) 相似，则下列结论错误的是：\n（A）\\(\\boldsymbol{A}^{T}\\) 与 \\(\\boldsymbol{B}^{T}\\) 相似。\n（B）\\(\\boldsymbol{A}^{-1}\\) 与 \\(\\boldsymbol{B}^{-1}\\) 相似。\n（C）\\(\\boldsymbol{A}^{T}+\\boldsymbol{A}\\) 与 \\(\\boldsymbol{B}^{T}+\\boldsymbol{B}\\) 相似。\n（D）\\(\\boldsymbol{A}^{-1}+\\boldsymbol{A}\\) 与 \\(\\boldsymbol{B}^{-1}+\\boldsymbol{B}\\) 相似。",
        "answer": "（C）",
        "keyFormulas": [
          "\\boldsymbol{B}=\\boldsymbol{P}^{-1}\\boldsymbol{A}\\boldsymbol{P}",
          "\\boldsymbol{B}^{-1}=\\boldsymbol{P}^{-1}\\boldsymbol{A}^{-1}\\boldsymbol{P}",
          "\\boldsymbol{A}^{T}",
          "\\boldsymbol{B}^{T}",
          "\\boldsymbol{B}^{-1}+\\boldsymbol{B}\n=\\boldsymbol{P}^{-1}(\\boldsymbol{A}^{-1}+\\boldsymbol{A})\\boldsymbol{P}."
        ],
        "guide": {
          "concept": "先用特征方程找特征值，再解 (A-λE)x=0。能否对角化取决于线性无关特征向量是否足够。",
          "method": "利用迹、行列式和已知特征向量简化；分别求每个特征值的特征子空间维数；按列组成 P，并保持特征值顺序一致。",
          "pitfall": "重特征值不等于一定不能对角化；相似矩阵特征值相同，但反过来不一定相似。",
          "extension": "相邻考法包括矩阵幂、二次型正交变换和实对称矩阵。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648732",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=2",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2016-8",
        "year": 2016,
        "number": 8,
        "kind": "单项选择题",
        "subject": "线性代数",
        "topic": "二次型",
        "question": "设二次型\n\\[f(x_1,x_2,x_3)=a(x_1^2+x_2^2+x_3^2)+2x_1x_2+2x_2x_3+2x_1x_3\n\\]\n的正、负惯性指数分别为 \\(1,2\\)，则：\n（A）\\(a>1\\)。\n（B）\\(a<-2\\)。\n（C）\\(-2<a<1\\)。\n（D）\\(a=1\\) 与 \\(a=-2\\)。",
        "answer": "（C）",
        "keyFormulas": [
          "\\boldsymbol{A}=\n\\begin{pmatrix}\na&1&1\\\\\n1&a&1\\\\\n1&1&a\n\\end{pmatrix}.",
          "a+2,a-1,a-1",
          "1,2",
          "a+2>0",
          "a-1<0",
          "-2<a<1"
        ],
        "guide": {
          "concept": "二次型先写对称矩阵，交叉项 2aᵢⱼxᵢxⱼ 对应矩阵中的 aᵢⱼ，而不是2aᵢⱼ。",
          "method": "配方法用于一般可逆线性变换；实对称矩阵正交对角化用特征值和单位正交特征向量；正定性可用顺序主子式。",
          "pitfall": "标准形系数与特征值只在正交变换下直接对应；规范形只保留正负号和零。",
          "extension": "相邻考法包括合同、惯性指数和矩阵正定性。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648732",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=2",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2016-9",
        "year": 2016,
        "number": 9,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "极限计算",
        "question": "曲线\n\\[y=\\frac{x^3}{1+x^2}+\\arctan(1+x^2)\n\\]\n的斜渐近线方程为 ________。",
        "answer": "\\(y=x+\\dfrac{\\pi}{2}\\)",
        "keyFormulas": [
          "a=\\lim_{x\\to\\infty}\\frac{y}{x}=1,\\qquad\nb=\\lim_{x\\to\\infty}(y-x)=\\frac{\\pi}{2},",
          "y=x+\\dfrac{\\pi}{2}"
        ],
        "guide": {
          "concept": "极限题的关键不是一上来求导，而是先判断未定式类型，再选择等价无穷小、洛必达、泰勒、夹逼、单调有界或定积分定义。",
          "method": "第一行写清趋近方向和分子分母的量级；第二行处理主导项；第三行再约分或求导。遇到和式先试定积分定义，遇到递推先找单调性与界。",
          "pitfall": "连续使用洛必达会掩盖结构，也容易在不满足条件时误用。含绝对值、单侧极限和参数时必须分别检查。",
          "extension": "可联动复习无穷小比较、数列极限、函数极限和含参极限。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648732",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=2",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2016-10",
        "year": 2016,
        "number": 10,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "极限计算",
        "question": "极限\n\\[\\lim_{n\\to\\infty}\\frac{1}{n^{2}}\\left(\\sin\\frac{1}{n}+2\\sin\\frac{2}{n}+\\cdots+n\\sin\\frac{n}{n}\\right)=\n\\]\n________。",
        "answer": "\\(\\sin 1-\\cos 1\\)",
        "keyFormulas": [
          "\\lim_{n\\to\\infty}\\frac{1}{n}\\sum_{k=1}^{n}\\frac{k}{n}\\sin\\frac{k}{n}\n=\\int_0^1 x\\sin x\\,\\mathrm{d}x\n=\\sin1-\\cos1."
        ],
        "guide": {
          "concept": "极限题的关键不是一上来求导，而是先判断未定式类型，再选择等价无穷小、洛必达、泰勒、夹逼、单调有界或定积分定义。",
          "method": "第一行写清趋近方向和分子分母的量级；第二行处理主导项；第三行再约分或求导。遇到和式先试定积分定义，遇到递推先找单调性与界。",
          "pitfall": "连续使用洛必达会掩盖结构，也容易在不满足条件时误用。含绝对值、单侧极限和参数时必须分别检查。",
          "extension": "可联动复习无穷小比较、数列极限、函数极限和含参极限。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648732",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=2",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2016-11",
        "year": 2016,
        "number": 11,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "常微分方程",
        "question": "以 \\(y=x^{2}-e^{x}\\) 和 \\(y=x^{2}\\) 为特解的一阶非齐次线性微分方程为 ________。",
        "answer": "\\(y'-y=2x-x^{2}\\)",
        "keyFormulas": [
          "e^x",
          "p(x)=-1",
          "y=x^2",
          "q(x)=2x-x^2",
          "y'-y=2x-x^2"
        ],
        "guide": {
          "concept": "先识别类型：可分离、一阶线性、伯努利、可降阶或二阶常系数。类型判断比直接试算更重要。",
          "method": "齐次部分先解特征方程；非齐次项按形式设特解，若与齐次解共振就乘 x 的适当次幂；最后用初值确定常数。",
          "pitfall": "设特解时多项式次数、指数因子和三角组合都要保留；共振次数漏乘 x 是高频错误。",
          "extension": "相邻考法包括微分方程建模、曲线族和积分方程。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648732",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=2",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2016-12",
        "year": 2016,
        "number": 12,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "连续、间断与渐近线",
        "question": "已知函数 \\(f(x)\\) 在 \\((-\\infty,+\\infty)\\) 上连续，且\n\\[f(x)=(x+1)^2+2\\int_0^x f(t)\\,\\mathrm{d}t,\n\\]\n则当 \\(n\\geqslant 2\\) 时，\\(f^{(n)}(0)=\\) ________。",
        "answer": "\\(\\dfrac{5}{2}\\times 2^{n}\\)",
        "keyFormulas": [
          "f(0)=1",
          "f'(x)=2(x+1)+2f(x),",
          "f'(0)=4",
          "f''(0)=10",
          "f^{(n)}(x)=2^{n-2}f''(x)\\ (n\\geqslant2)",
          "f^{(n)}(0)=10\\cdot2^{n-2}=\\frac52\\cdot2^n."
        ],
        "guide": {
          "concept": "先列出所有可能出问题的点：分母为0、对数真数不正、根式越界以及分段点。连续要求极限存在并等于函数值。",
          "method": "对每个候选点分别算左右极限；渐近线则按垂直、水平、斜渐近线三类依次检查，斜渐近线用 k=lim f(x)/x、b=lim[f(x)-kx]。",
          "pitfall": "函数在点处有定义不代表连续；无定义也不代表一定是无穷间断。渐近线要区分 x→+∞ 与 x→-∞。",
          "extension": "相邻考法包括原函数存在性、可导与连续关系、间断点分类。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648732",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=2",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2016-13",
        "year": 2016,
        "number": 13,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "综合应用",
        "question": "已知动点 \\(P\\) 在曲线 \\(y=x^3\\) 上运动，记坐标原点与点 \\(P\\) 间的距离为 \\(l\\)。若点 \\(P\\) 的横坐标对时间的变化率为常数 \\(v_0\\)，则当点 \\(P\\) 运动到点 \\((1,1)\\) 时，\\(l\\) 对时间的变化率是 ________。",
        "answer": "\\(2\\sqrt{2}v_0\\)",
        "keyFormulas": [
          "l=\\sqrt{x^2+x^6},",
          "\\frac{\\mathrm{d}l}{\\mathrm{d}t}\n=\\frac{2x+6x^5}{2\\sqrt{x^2+x^6}}\\cdot\\frac{\\mathrm{d}x}{\\mathrm{d}t}.",
          "x=1",
          "\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}=v_0",
          "\\dfrac{\\mathrm{d}l}{\\mathrm{d}t}=2\\sqrt2v_0"
        ],
        "guide": {
          "concept": "先判断题目属于高等数学还是线性代数，并把题干中的已知条件、所求对象和限制范围分别圈出。",
          "method": "选择最直接的定义或定理，先写公式，再代条件，保留关键中间步骤，最后用答案反查题意。",
          "pitfall": "不要在读题未完成时开始心算；符号、定义域、单侧条件和矩阵乘法顺序都是高频失分点。",
          "extension": "做完后把本题归入对应专题，再找一道同方法不同外观的题复做。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648732",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=2",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2016-14",
        "year": 2016,
        "number": 14,
        "kind": "填空题",
        "subject": "线性代数",
        "topic": "向量组与线性相关",
        "question": "设矩阵\n\\[\\begin{pmatrix}\na&-1&-1\\\\\n-1&a&-1\\\\\n-1&-1&a\n\\end{pmatrix}\n\\]\n与\n\\[\\begin{pmatrix}\n1&1&0\\\\\n0&-1&1\\\\\n1&0&1\n\\end{pmatrix}\n\\]\n等价，则 \\(a=\\) ________。",
        "answer": "\\(2\\)",
        "keyFormulas": [
          "(a+1)^2(a-2).",
          "a=-1",
          "a=2"
        ],
        "guide": {
          "concept": "线性相关的本质是能否找到不全为0的系数组合成零向量；秩等于最大线性无关组所含向量数。",
          "method": "把向量按列组成矩阵并做行化简；主元列给出最大无关组；自由变量对应齐次方程基础解系。",
          "pitfall": "不要把行化简后的列直接当成原向量组的最大无关组；选列应回到原矩阵对应位置。",
          "extension": "相邻考法包括线性表示、秩不等式和解空间维数。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648732",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=2",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2016-15",
        "year": 2016,
        "number": 15,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "等价无穷小与泰勒展开",
        "question": "求极限\n\\[\\lim_{x\\to0}\\left(\\cos2x+2x\\sin x\\right)^{1/x^4}.\n\\]",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "e^L",
          "L=\\lim_{x\\to0}\\frac{\\cos2x+2x\\sin x-1}{x^4}.",
          "\\cos2x=1-2x^2+\\frac23x^4+o(x^4),\\qquad\n2x\\sin x=2x^2-\\frac13x^4+o(x^4),",
          "L=\\dfrac13",
          "e^{1/3}."
        ],
        "guide": {
          "concept": "先看每一项在趋近点附近的最低非零次幂。老师在视频里强调：比较阶数时系数通常不重要，但正负号、幂次和趋近条件绝不能口算带过。",
          "method": "把根式、对数、指数、三角函数逐个换成标准等价式；若相减造成低阶项抵消，就立即改用泰勒展开，写到第一个不为零的项。最后只比较幂指数。",
          "pitfall": "最容易把 1-cos x 与 cos x-1 的符号写反，或在加减结构中违规直接做等价替换。先确认替换对象整体趋于0。",
          "extension": "同一知识点还会考极限值、无穷小阶数排序、参数确定和泰勒系数。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648732",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=2",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2016-16",
        "year": 2016,
        "number": 16,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "综合应用",
        "question": "设函数\n\\[f(x)=\\int_0^1|t^2-x^2|\\,\\mathrm{d}t\\qquad (x>0),\n\\]\n求 \\(f'(x)\\) 并求 \\(f(x)\\) 的最小值。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "f(x)=\n\\begin{cases}\n\\dfrac43x^3-x^2+\\dfrac13, & 0<x\\leqslant1,\\\\[6pt]\nx^2-\\dfrac13, & x>1.\n\\end{cases}",
          "f'(x)=\n\\begin{cases}\n4x^2-2x, & 0<x\\leqslant1,\\\\\n2x, & x>1.\n\\end{cases}",
          "x=\\dfrac12",
          "f\\left(\\frac12\\right)=\\frac14.",
          "f(x)",
          "\\dfrac14"
        ],
        "guide": {
          "concept": "先判断题目属于高等数学还是线性代数，并把题干中的已知条件、所求对象和限制范围分别圈出。",
          "method": "选择最直接的定义或定理，先写公式，再代条件，保留关键中间步骤，最后用答案反查题意。",
          "pitfall": "不要在读题未完成时开始心算；符号、定义域、单侧条件和矩阵乘法顺序都是高频失分点。",
          "extension": "做完后把本题归入对应专题，再找一道同方法不同外观的题复做。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648732",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=2",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2016-17",
        "year": 2016,
        "number": 17,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "多元函数微分",
        "question": "已知函数 \\(z=z(x,y)\\) 由方程\n\\[(x^2+y^2)z+\\ln z+2(x+y+1)=0\n\\]\n确定，求 \\(z=z(x,y)\\) 的极值。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "x,y",
          "z_x=z_y=0",
          "xz+1=0,\\qquad yz+1=0.",
          "(x,y,z)=(-1,-1,1).",
          "A=z_{xx}=-\\frac23,\\qquad B=z_{xy}=0,\\qquad C=z_{yy}=-\\frac23.",
          "AC-B^2>0",
          "A<0",
          "(-1,-1)"
        ],
        "guide": {
          "concept": "多元题先区分偏导数、方向导数、全微分和复合函数链式法则。偏导存在不自动推出连续或可微。",
          "method": "画依赖关系：外层变量对中间变量求偏导，中间变量再对自变量求导；每条路径的乘积相加。指定点最后再代入。",
          "pitfall": "二阶混合偏导只有在相应连续条件下才能随意交换次序；沿坐标轴极限不能代替二元极限。",
          "extension": "相邻考法包括极值、条件极值、切平面与法线。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648732",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=2",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2016-18",
        "year": 2016,
        "number": 18,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "二重积分与区域变换",
        "question": "设 \\(D\\) 是由直线 \\(y=1\\)，\\(y=x\\)，\\(y=-x\\) 围成的有界区域，计算二重积分\n\\[\\iint_D\\frac{x^2-xy-y^2}{x^2+y^2}\\,\\mathrm{d}x\\,\\mathrm{d}y.\n\\]",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "\\iint_D\\frac{xy}{x^2+y^2}\\,\\mathrm{d}x\\,\\mathrm{d}y=0.",
          "I=\\iint_D1\\,\\mathrm{d}x\\,\\mathrm{d}y\n-2\\iint_D\\frac{y^2}{x^2+y^2}\\,\\mathrm{d}x\\,\\mathrm{d}y.",
          "D_1",
          "-2\\iint_D\\frac{y^2}{x^2+y^2}\\,\\mathrm{d}x\\,\\mathrm{d}y\n=-4\\int_0^1\\int_0^y\\frac{y^2}{x^2+y^2}\\,\\mathrm{d}x\\,\\mathrm{d}y\n=-\\frac{\\pi}{2}.",
          "I=1-\\frac{\\pi}{2}."
        ],
        "guide": {
          "concept": "二重积分先画区域。很多计算错误不是积分不会，而是上下限描述了错误的区域。",
          "method": "标出边界交点；选择先 x 后 y 或先 y 后 x；圆、扇形和只含 x²+y² 的结构优先考虑极坐标，并补上雅可比 r。",
          "pitfall": "交换积分次序必须重新写全部上下限；利用对称性前先检查区域和被积函数奇偶性。",
          "extension": "相邻考法包括体积、质心、变换积分次序和参数区域。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648732",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=2",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2016-19",
        "year": 2016,
        "number": 19,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "常微分方程",
        "question": "已知 \\(y_1(x)=e^x\\)，\\(y_2(x)=\\mu(x)e^x\\) 是二阶微分方程\n\\[(2x-1)y''-(2x+1)y'+2y=0\n\\]\n的两个解，若 \\(\\mu(-1)=e\\)，\\(\\mu(0)=-1\\)，求 \\(\\mu(x)\\) 并写出该微分方程的通解。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "y_2=\\mu e^x",
          "(2x-1)\\mu''=(3-2x)\\mu'.",
          "\\frac{\\mu''}{\\mu'}=\\frac{3-2x}{2x-1},",
          "\\mu'(x)=C_1(2x-1)e^{-x}.",
          "\\mu(-1)=e,\\ \\mu(0)=-1",
          "\\mu(x)=(-2x-1)e^{-x}.",
          "y_2(x)=\\mu(x)e^x=-2x-1",
          "y=C_1e^x+C_2(2x+1)."
        ],
        "guide": {
          "concept": "先识别类型：可分离、一阶线性、伯努利、可降阶或二阶常系数。类型判断比直接试算更重要。",
          "method": "齐次部分先解特征方程；非齐次项按形式设特解，若与齐次解共振就乘 x 的适当次幂；最后用初值确定常数。",
          "pitfall": "设特解时多项式次数、指数因子和三角组合都要保留；共振次数漏乘 x 是高频错误。",
          "extension": "相邻考法包括微分方程建模、曲线族和积分方程。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648732",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=2",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2016-20",
        "year": 2016,
        "number": 20,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "定积分的几何与物理应用",
        "question": "设 \\(D\\) 是由曲线\n\\[y=\\sqrt{1-x^2}\\quad (0\\leqslant x\\leqslant1)\n\\]\n与参数方程\n\\[x=\\cos^3t,\\qquad y=\\sin^3t,\\qquad 0\\leqslant t\\leqslant\\frac{\\pi}{2}\n\\]\n围成的平面区域，求 \\(D\\) 绕 \\(x\\) 轴旋转一周所得旋转体的体积和表面积。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "V=\\pi\\int_0^1(1-x^2)\\,\\mathrm{d}x\n-\\pi\\int_0^{\\pi/2}\\sin^6t\\cdot3\\cos^2t\\sin t\\,\\mathrm{d}t.",
          "V=\\frac{2\\pi}{3}-3\\pi\\int_0^{\\pi/2}\\sin^7t\\cos^2t\\,\\mathrm{d}t\n=\\frac{18\\pi}{35}.",
          "S_1=2\\pi\\int_0^1\\sqrt{1-x^2}\\sqrt{1+\\frac{x^2}{1-x^2}}\\,\\mathrm{d}x=2\\pi,",
          "S_2=2\\pi\\int_0^{\\pi/2}\\sin^3t\\cdot3\\sin t\\cos t\\,\\mathrm{d}t=\\frac{6\\pi}{5}.",
          "S=S_1+S_2=\\frac{16\\pi}{5}."
        ],
        "guide": {
          "concept": "先把几何量写成微元：面积、体积、弧长、压力或功，再决定沿哪个变量累加。",
          "method": "画图并标出典型小条；写微元公式；确定积分区间；最后检查结果量纲和正负。旋转体要先确认绕哪条轴。",
          "pitfall": "把半径、直径和到旋转轴的距离混淆，会让结果成倍出错；物理题还要统一单位。",
          "extension": "相邻考法包括相关变化率、最值和二重积分应用。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648732",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=2",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2016-21",
        "year": 2016,
        "number": 21,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "中值定理与零点证明",
        "question": "已知 \\(f(x)\\) 在 \\(\\left[0,\\dfrac{3\\pi}{2}\\right]\\) 上连续，在 \\(\\left(0,\\dfrac{3\\pi}{2}\\right)\\) 内是函数\n\\[\\frac{\\cos x}{2x-3\\pi}\n\\]\n的一个原函数，且 \\(f(0)=0\\)。\n（1）求 \\(f(x)\\) 在区间 \\(\\left[0,\\dfrac{3\\pi}{2}\\right]\\) 上的平均值；\n（2）证明 \\(f(x)\\) 在区间 \\(\\left(0,\\dfrac{3\\pi}{2}\\right)\\) 内存在唯一零点。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "f(x)=\\int_0^x\\frac{\\cos t}{2t-3\\pi}\\,\\mathrm{d}t.",
          "\\int_0^{3\\pi/2}f(x)\\,\\mathrm{d}x\n=\\int_0^{3\\pi/2}\\frac{\\cos t}{2t-3\\pi}\\left(\\frac{3\\pi}{2}-t\\right)\\mathrm{d}t\n=-\\frac12\\int_0^{3\\pi/2}\\cos t\\,\\mathrm{d}t\n=\\frac12.",
          "\\frac{\\frac12}{\\frac{3\\pi}{2}}=\\frac{1}{3\\pi}.",
          "f'(x)=\\frac{\\cos x}{2x-3\\pi},",
          "f'(x)<0",
          "\\left(0,\\dfrac{\\pi}{2}\\right)",
          "f'(x)>0",
          "\\left(\\dfrac{\\pi}{2},\\dfrac{3\\pi}{2}\\right)"
        ],
        "guide": {
          "concept": "存在性证明的核心是‘构造谁、在哪个区间用哪个定理’。目标式通常提示辅助函数的导数形式。",
          "method": "先用连续性和端点异号找零点；再根据目标式反推辅助函数。罗尔定理要逐项核对闭区间连续、开区间可导、端点函数值相等。",
          "pitfall": "只写‘由罗尔定理可得’但不说明区间与条件会丢步骤分；多个根要使用互不重叠的区间。",
          "extension": "常与积分中值定理、柯西中值定理、零点个数和不等式结合。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648732",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=2",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2016-22",
        "year": 2016,
        "number": 22,
        "kind": "解答题",
        "subject": "线性代数",
        "topic": "线性方程组",
        "question": "设矩阵\n\\[\\boldsymbol{A}=\n\\begin{pmatrix}\n1&1&1-a\\\\\n1&0&a\\\\\na+1&1&a+1\n\\end{pmatrix},\n\\qquad\n\\boldsymbol{\\beta}=\n\\begin{pmatrix}\n0\\\\\n1\\\\\n2a-2\n\\end{pmatrix},\n\\]\n且方程组 \\(\\boldsymbol{A}\\boldsymbol{x}=\\boldsymbol{\\beta}\\) 无解。\n（1）求 \\(a\\) 的值；\n（2）求方程组 \\(\\boldsymbol{A}^{T}\\boldsymbol{A}\\boldsymbol{x}=\\boldsymbol{A}^{T}\\boldsymbol{\\beta}\\) 的通解。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "|\\boldsymbol{A}|=0",
          "|\\boldsymbol{A}|=0\\quad \\Rightarrow\\quad a=0\\ \\text{或}\\ a=2.",
          "a=0",
          "a=2",
          "a=0.",
          "\\boldsymbol{A}^{T}\\boldsymbol{A}=\n\\begin{pmatrix}\n3&2&2\\\\\n2&2&2\\\\\n2&2&2\n\\end{pmatrix},\n\\qquad\n\\boldsymbol{A}^{T}\\boldsymbol{\\beta}=\n\\begin{pmatrix}\n-1\\\\\n-2\\\\\n-2\n\\end{pmatrix}.",
          "\\begin{pmatrix}\n3&2&2&-1\\\\\n2&2&2&-2\\\\\n2&2&2&-2\n\\end{pmatrix}\n\\to\n\\begin{pmatrix}\n1&0&0&1\\\\\n0&1&1&-2\\\\\n0&0&0&0\n\\end{pmatrix}.",
          "\\boldsymbol{x}\n=\n\\begin{pmatrix}\n1\\\\\n-2\\\\\n0\n\\end{pmatrix}\n+k\n\\begin{pmatrix}\n0\\\\\n-1\\\\\n1\n\\end{pmatrix},\n\\qquad k\\in\\mathbb{R}."
        ],
        "guide": {
          "concept": "方程组先比较系数矩阵秩 r(A) 与增广矩阵秩 r(A,b)，再讨论无解、唯一解或无穷多解。",
          "method": "对增广矩阵做初等行变换；确定主元和自由变量；非齐次通解=一个特解+齐次方程通解。",
          "pitfall": "有参数时秩可能分情况变化；不要只看行列式为0就直接断言无解。",
          "extension": "相邻考法包括公共解、同解方程组与矩阵秩。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648732",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=2",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2016-23",
        "year": 2016,
        "number": 23,
        "kind": "解答题",
        "subject": "线性代数",
        "topic": "特征值、特征向量与相似",
        "question": "已知矩阵\n\\[\\boldsymbol{A}=\n\\begin{pmatrix}\n0&-1&1\\\\\n2&-3&0\\\\\n0&0&0\n\\end{pmatrix}.\n\\]\n（1）求 \\(\\boldsymbol{A}^{99}\\)；\n（2）设 \\(3\\) 阶矩阵 \\(\\boldsymbol{B}=(\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3})\\) 满足 \\(\\boldsymbol{B}^{2}=\\boldsymbol{B}\\boldsymbol{A}\\)。记 \\(\\boldsymbol{B}^{100}=(\\boldsymbol{\\beta}_{1},\\boldsymbol{\\beta}_{2},\\boldsymbol{\\beta}_{3})\\)，将 \\(\\boldsymbol{\\beta}_{1},\\boldsymbol{\\beta}_{2},\\boldsymbol{\\beta}_{3}\\) 分别表示为 \\(\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3}\\) 的线性组合。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "|\\lambda\\boldsymbol{E}-\\boldsymbol{A}|=\\lambda(\\lambda+1)(\\lambda+2),",
          "\\boldsymbol{A}",
          "\\boldsymbol{P}=\n\\begin{pmatrix}\n\\dfrac32&1&1\\\\\n1&1&2\\\\\n1&0&0\n\\end{pmatrix},\n\\qquad\n\\boldsymbol{\\Lambda}=\n\\begin{pmatrix}\n0&0&0\\\\\n0&-1&0\\\\\n0&0&-2\n\\end{pmatrix},",
          "\\boldsymbol{A}=\\boldsymbol{P}\\boldsymbol{\\Lambda}\\boldsymbol{P}^{-1}",
          "\\boldsymbol{A}^{99}=\n\\begin{pmatrix}\n-2+2^{99}&1-2^{99}&2-2^{99}\\\\\n-2+2^{100}&1-2^{100}&2-2^{99}\\\\\n0&0&0\n\\end{pmatrix}.",
          "\\boldsymbol{B}^{2}=\\boldsymbol{B}\\boldsymbol{A}",
          "\\boldsymbol{B}^{100}=\\boldsymbol{B}\\boldsymbol{A}^{99}.",
          "(\\boldsymbol{\\beta}_{1},\\boldsymbol{\\beta}_{2},\\boldsymbol{\\beta}_{3})\n=(\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3})\\boldsymbol{A}^{99}."
        ],
        "guide": {
          "concept": "先用特征方程找特征值，再解 (A-λE)x=0。能否对角化取决于线性无关特征向量是否足够。",
          "method": "利用迹、行列式和已知特征向量简化；分别求每个特征值的特征子空间维数；按列组成 P，并保持特征值顺序一致。",
          "pitfall": "重特征值不等于一定不能对角化；相似矩阵特征值相同，但反过来不一定相似。",
          "extension": "相邻考法包括矩阵幂、二次型正交变换和实对称矩阵。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648732",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=2",
        "videoExtraUrl": ""
      }
    ]
  },
  {
    "year": 2017,
    "videoPage": 5,
    "items": [
      {
        "id": "math2-2017-1",
        "year": 2017,
        "number": 1,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "极限计算",
        "question": "若函数\n\\[f(x)=\n\\begin{cases}\n\\dfrac{1-\\cos\\sqrt{x}}{ax}, & x>0,\\\\\nb, & x\\le 0\n\\end{cases}\n\\]\n在 \\(x=0\\) 处连续，则（ ）\nA. \\(ab=\\dfrac{1}{2}\\)\nB. \\(ab=-\\dfrac{1}{2}\\)\nC. \\(ab=0\\)\nD. \\(ab=2\\)",
        "answer": "A",
        "keyFormulas": [
          "1-\\cos\\sqrt{x}\\sim \\dfrac{x}{2}",
          "\\lim_{x\\to0^+}\\frac{1-\\cos\\sqrt{x}}{ax}=\\frac{1}{2a}.",
          "b=\\dfrac{1}{2a}",
          "ab=\\dfrac12"
        ],
        "guide": {
          "concept": "极限题的关键不是一上来求导，而是先判断未定式类型，再选择等价无穷小、洛必达、泰勒、夹逼、单调有界或定积分定义。",
          "method": "第一行写清趋近方向和分子分母的量级；第二行处理主导项；第三行再约分或求导。遇到和式先试定积分定义，遇到递推先找单调性与界。",
          "pitfall": "连续使用洛必达会掩盖结构，也容易在不满足条件时误用。含绝对值、单侧极限和参数时必须分别检查。",
          "extension": "可联动复习无穷小比较、数列极限、函数极限和含参极限。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648692",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=5",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2017-2",
        "year": 2017,
        "number": 2,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "定积分的几何与物理应用",
        "question": "设二阶可导函数 \\(f(x)\\) 满足\n\\[f(1)=f(-1)=1,\\qquad f(0)=-1,\\qquad f''(x)>0,\n\\]\n则（ ）\nA. \\(\\int_{-1}^{1} f(x)\\mathrm{d}x>0\\)\nB. \\(\\int_{-1}^{1} f(x)\\mathrm{d}x<0\\)\nC. \\(\\int_{-1}^{0} f(x)\\mathrm{d}x>\\int_{0}^{1} f(x)\\mathrm{d}x\\)\nD. \\(\\int_{-1}^{0} f(x)\\mathrm{d}x<\\int_{0}^{1} f(x)\\mathrm{d}x\\)",
        "answer": "B",
        "keyFormulas": [
          "f''(x)>0",
          "f(x)",
          "[-1,0]",
          "[0,1]",
          "\\int_{-1}^{1}f(x)\\mathrm{d}x<0."
        ],
        "guide": {
          "concept": "先把几何量写成微元：面积、体积、弧长、压力或功，再决定沿哪个变量累加。",
          "method": "画图并标出典型小条；写微元公式；确定积分区间；最后检查结果量纲和正负。旋转体要先确认绕哪条轴。",
          "pitfall": "把半径、直径和到旋转轴的距离混淆，会让结果成倍出错；物理题还要统一单位。",
          "extension": "相邻考法包括相关变化率、最值和二重积分应用。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648692",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=5",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2017-3",
        "year": 2017,
        "number": 3,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "极限计算",
        "question": "设数列 \\(\\{x_n\\}\\) 收敛，则（ ）\nA. 当 \\(\\lim\\limits_{n\\to\\infty}\\sin x_n=0\\) 时，\\(\\lim\\limits_{n\\to\\infty}x_n=0\\)\nB. 当 \\(\\lim\\limits_{n\\to\\infty}(x_n+\\sqrt{|x_n|})=0\\) 时，\\(\\lim\\limits_{n\\to\\infty}x_n=0\\)\nC. 当 \\(\\lim\\limits_{n\\to\\infty}(x_n+x_n^2)=0\\) 时，\\(\\lim\\limits_{n\\to\\infty}x_n=0\\)\nD. 当 \\(\\lim\\limits_{n\\to\\infty}(x_n+\\sin x_n)=0\\) 时，\\(\\lim\\limits_{n\\to\\infty}x_n=0\\)",
        "answer": "D",
        "keyFormulas": [
          "x_n=\\pi",
          "x_n=-1",
          "h(x)=x+\\sin x",
          "h(0)=0",
          "h(x_n)\\to0",
          "x_n\\to0"
        ],
        "guide": {
          "concept": "极限题的关键不是一上来求导，而是先判断未定式类型，再选择等价无穷小、洛必达、泰勒、夹逼、单调有界或定积分定义。",
          "method": "第一行写清趋近方向和分子分母的量级；第二行处理主导项；第三行再约分或求导。遇到和式先试定积分定义，遇到递推先找单调性与界。",
          "pitfall": "连续使用洛必达会掩盖结构，也容易在不满足条件时误用。含绝对值、单侧极限和参数时必须分别检查。",
          "extension": "可联动复习无穷小比较、数列极限、函数极限和含参极限。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648692",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=5",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2017-4",
        "year": 2017,
        "number": 4,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "常微分方程",
        "question": "微分方程的特解可设为（ ）\nA. \\(Ae^{2x}+e^{2x}(B\\cos2x+C\\sin2x)\\)\nB. \\(Axe^{2x}+e^{2x}(B\\cos2x+C\\sin2x)\\)\nC. \\(Ae^{2x}+xe^{2x}(B\\cos2x+C\\sin2x)\\)\nD. \\(Axe^{2x}+e^{2x}(B\\cos2x+C\\sin2x)\\)",
        "answer": "C",
        "keyFormulas": [
          "\\lambda^2-4\\lambda+8=0,",
          "2\\pm2i",
          "e^{2x}+e^{2x}\\cos2x",
          "y^*=Ae^{2x}+xe^{2x}(B\\cos2x+C\\sin2x)."
        ],
        "guide": {
          "concept": "先识别类型：可分离、一阶线性、伯努利、可降阶或二阶常系数。类型判断比直接试算更重要。",
          "method": "齐次部分先解特征方程；非齐次项按形式设特解，若与齐次解共振就乘 x 的适当次幂；最后用初值确定常数。",
          "pitfall": "设特解时多项式次数、指数因子和三角组合都要保留；共振次数漏乘 x 是高频错误。",
          "extension": "相邻考法包括微分方程建模、曲线族和积分方程。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648692",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=5",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2017-5",
        "year": 2017,
        "number": 5,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "多元函数微分",
        "question": "设 \\(f(x,y)\\) 具有一阶偏导数，且对任意 \\((x,y)\\)，都有\n\\[\\frac{\\partial f}{\\partial x}>0,\\qquad \\frac{\\partial f}{\\partial y}<0,\n\\]\n则（ ）\nA. \\(f(0,0)>f(1,1)\\)\nB. \\(f(0,0)<f(1,1)\\)\nC. \\(f(0,1)>f(1,0)\\)\nD. \\(f(0,1)<f(1,0)\\)",
        "answer": "D",
        "keyFormulas": [
          "f(0,1)<f(1,1)<f(1,0),"
        ],
        "guide": {
          "concept": "多元题先区分偏导数、方向导数、全微分和复合函数链式法则。偏导存在不自动推出连续或可微。",
          "method": "画依赖关系：外层变量对中间变量求偏导，中间变量再对自变量求导；每条路径的乘积相加。指定点最后再代入。",
          "pitfall": "二阶混合偏导只有在相应连续条件下才能随意交换次序；沿坐标轴极限不能代替二元极限。",
          "extension": "相邻考法包括极值、条件极值、切平面与法线。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648692",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=5",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2017-6",
        "year": 2017,
        "number": 6,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "定积分的几何与物理应用",
        "question": "甲、乙两人赛跑。计时开始时，甲在乙前方 \\(10\\mathrm{m}\\) 处。图中实线表示甲的速度曲线 \\(v=v_1(t)\\)，虚线表示乙的速度曲线 \\(v=v_2(t)\\)。三块阴影部分面积的数值依次为 \\(10,20,3\\)。计时开始后乙追上甲的时刻记为 \\(t_0\\)，则（ ）\nA. \\(t_0=10\\)\nB. \\(15<t_0<20\\)\nC. \\(t_0=25\\)\nD. \\(t_0>25\\)",
        "answer": "B",
        "keyFormulas": [
          "\\int_0^{t_0}\\bigl(v_2(t)-v_1(t)\\bigr)\\mathrm{d}t=10.",
          "t=15",
          "t=20",
          "15<t_0<20."
        ],
        "guide": {
          "concept": "先把几何量写成微元：面积、体积、弧长、压力或功，再决定沿哪个变量累加。",
          "method": "画图并标出典型小条；写微元公式；确定积分区间；最后检查结果量纲和正负。旋转体要先确认绕哪条轴。",
          "pitfall": "把半径、直径和到旋转轴的距离混淆，会让结果成倍出错；物理题还要统一单位。",
          "extension": "相邻考法包括相关变化率、最值和二重积分应用。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648692",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=5",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2017-7",
        "year": 2017,
        "number": 7,
        "kind": "单项选择题",
        "subject": "线性代数",
        "topic": "行列式与矩阵运算",
        "question": "设 \\(\\boldsymbol A\\) 为三阶矩阵，\\(\\boldsymbol P=(\\boldsymbol\\alpha_1,\\boldsymbol\\alpha_2,\\boldsymbol\\alpha_3)\\) 为可逆矩阵，且\n\\[\\boldsymbol P^{-1}\\boldsymbol A\\boldsymbol P=\n\\begin{pmatrix}\n0\\\\\n1\\\\\n2\n\\end{pmatrix},\n\\]\n则 \\(\\boldsymbol A(\\boldsymbol\\alpha_1+\\boldsymbol\\alpha_2+\\boldsymbol\\alpha_3)=\\)（ ）\nA. \\(\\boldsymbol\\alpha_1+\\boldsymbol\\alpha_2\\)\nB. \\(\\boldsymbol\\alpha_2+2\\boldsymbol\\alpha_3\\)\nC. \\(\\boldsymbol\\alpha_2+\\boldsymbol\\alpha_3\\)\nD. \\(\\boldsymbol\\alpha_1+2\\boldsymbol\\alpha_2\\)",
        "answer": "B",
        "keyFormulas": [
          "\\boldsymbol P^{-1}\\boldsymbol A\\boldsymbol P=\n\\begin{pmatrix}\n0\\\\\n1\\\\\n2\n\\end{pmatrix}",
          "\\boldsymbol A(\\boldsymbol\\alpha_1+\\boldsymbol\\alpha_2+\\boldsymbol\\alpha_3)\n=(\\boldsymbol\\alpha_1,\\boldsymbol\\alpha_2,\\boldsymbol\\alpha_3)\n\\begin{pmatrix}\n0\\\\\n1\\\\\n2\n\\end{pmatrix}\n=\\boldsymbol\\alpha_2+2\\boldsymbol\\alpha_3."
        ],
        "guide": {
          "concept": "矩阵题先看题目要求的是数值、秩、可逆性还是结构关系。矩阵乘法不能交换顺序。",
          "method": "优先使用初等变换、分块、A·A* = |A|E、可逆矩阵保持秩等性质，避免无目的展开。",
          "pitfall": "行变换与列变换对行列式的影响不同；矩阵等式中左右乘同一矩阵也要保持位置。",
          "extension": "相邻考法包括秩、方程组、特征值和相似。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648692",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=5",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2017-8",
        "year": 2017,
        "number": 8,
        "kind": "单项选择题",
        "subject": "线性代数",
        "topic": "特征值、特征向量与相似",
        "question": "设矩阵\n\\[\\boldsymbol A=\n\\begin{pmatrix}\n2&0&0\\\\\n0&2&1\\\\\n0&0&1\n\\end{pmatrix},\\quad\n\\boldsymbol B=\n\\begin{pmatrix}\n2&1&0\\\\\n0&2&0\\\\\n0&0&1\n\\end{pmatrix},\\quad\n\\boldsymbol C=\n\\begin{pmatrix}\n1&0&0\\\\\n0&2&0\\\\\n0&0&2\n\\end{pmatrix},\n\\]\n则（ ）\nA. \\(\\boldsymbol A\\) 与 \\(\\boldsymbol C\\) 相似，\\(\\boldsymbol B\\) 与 \\(\\boldsymbol C\\) 相似\nB. \\(\\boldsymbol A\\) 与 \\(\\boldsymbol C\\) 相似，\\(\\boldsymbol B\\) 与 \\(\\boldsymbol C\\) 不相似\nC. \\(\\boldsymbol A\\) 与 \\(\\boldsymbol C\\) 不相似，\\(\\boldsymbol B\\) 与 \\(\\boldsymbol C\\) 相似\nD. \\(\\boldsymbol A\\) 与 \\(\\boldsymbol C\\) 不相似，\\(\\boldsymbol B\\) 与 \\(\\boldsymbol C\\) 不相似",
        "answer": "B",
        "keyFormulas": [
          "2,2,1",
          "\\boldsymbol A",
          "\\boldsymbol A\\sim\\boldsymbol C",
          "\\boldsymbol B",
          "\\boldsymbol B\\nsim\\boldsymbol C"
        ],
        "guide": {
          "concept": "先用特征方程找特征值，再解 (A-λE)x=0。能否对角化取决于线性无关特征向量是否足够。",
          "method": "利用迹、行列式和已知特征向量简化；分别求每个特征值的特征子空间维数；按列组成 P，并保持特征值顺序一致。",
          "pitfall": "重特征值不等于一定不能对角化；相似矩阵特征值相同，但反过来不一定相似。",
          "extension": "相邻考法包括矩阵幂、二次型正交变换和实对称矩阵。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648692",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=5",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2017-9",
        "year": 2017,
        "number": 9,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "极限计算",
        "question": "曲线\n\\[y=x\\left(1+\\arcsin\\frac{2}{x}\\right)\n\\]\n的斜渐近线方程为 ______",
        "answer": "\\(y=x+2\\)",
        "keyFormulas": [
          "k=\\lim_{x\\to\\infty}\\frac{y}{x}=1,",
          "b=\\lim_{x\\to\\infty}(y-x)\n=\\lim_{x\\to\\infty}x\\arcsin\\frac{2}{x}=2.",
          "y=x+2"
        ],
        "guide": {
          "concept": "极限题的关键不是一上来求导，而是先判断未定式类型，再选择等价无穷小、洛必达、泰勒、夹逼、单调有界或定积分定义。",
          "method": "第一行写清趋近方向和分子分母的量级；第二行处理主导项；第三行再约分或求导。遇到和式先试定积分定义，遇到递推先找单调性与界。",
          "pitfall": "连续使用洛必达会掩盖结构，也容易在不满足条件时误用。含绝对值、单侧极限和参数时必须分别检查。",
          "extension": "可联动复习无穷小比较、数列极限、函数极限和含参极限。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648692",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=5",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2017-10",
        "year": 2017,
        "number": 10,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "综合应用",
        "question": "设函数 \\(y=y(x)\\) 由参数方程\n\\[\\begin{cases}\nx=t+e^t,\\\\\ny=\\sin t\n\\end{cases}\n\\]\n确定，则\n\\[\\left.\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2}\\right|_{t=0}=\n\\]",
        "answer": "\\(-\\dfrac18\\)",
        "keyFormulas": [
          "\\frac{\\mathrm{d}y}{\\mathrm{d}x}=\\frac{\\cos t}{1+e^t},",
          "\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2}\n=\n\\frac{\\left(\\dfrac{\\cos t}{1+e^t}\\right)'}{1+e^t}.",
          "t=0",
          "\\left.\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2}\\right|_{t=0}=-\\frac18."
        ],
        "guide": {
          "concept": "先判断题目属于高等数学还是线性代数，并把题干中的已知条件、所求对象和限制范围分别圈出。",
          "method": "选择最直接的定义或定理，先写公式，再代条件，保留关键中间步骤，最后用答案反查题意。",
          "pitfall": "不要在读题未完成时开始心算；符号、定义域、单侧条件和矩阵乘法顺序都是高频失分点。",
          "extension": "做完后把本题归入对应专题，再找一道同方法不同外观的题复做。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648692",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=5",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2017-11",
        "year": 2017,
        "number": 11,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "一元积分",
        "question": "\\[\\int_{0}^{+\\infty}\\frac{\\ln(1+x)}{(1+x)^2}\\mathrm{d}x=\n\\]",
        "answer": "\\(1\\)",
        "keyFormulas": [
          "u=1+x",
          "\\int_0^{+\\infty}\\frac{\\ln(1+x)}{(1+x)^2}\\mathrm{d}x\n=\n\\int_1^{+\\infty}\\frac{\\ln u}{u^2}\\mathrm{d}u."
        ],
        "guide": {
          "concept": "先看结构再选方法：复合函数配导数用换元，乘积中一项求导变简单用分部积分，有理函数先做代数分解。",
          "method": "写出换元变量与新上下限；反常积分先把瑕点或无穷端点改写成极限；变上限积分先用微积分基本定理求导。",
          "pitfall": "不定积分别漏常数C；分段函数的原函数在分段点还必须连续；反常积分算出原函数不等于已经收敛，必须看极限。",
          "extension": "相邻考法包括积分比较、面积体积、积分不等式和含参积分。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648692",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=5",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2017-12",
        "year": 2017,
        "number": 12,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "多元函数微分",
        "question": "设函数 \\(f(x,y)\\) 具有一阶连续偏导数，且\n\\[\\mathrm{d}f(x,y)=ye^y\\mathrm{d}x+x(1+y)e^y\\mathrm{d}y,\\qquad f(0,0)=0,\n\\]\n则 \\(f(x,y)=\\) ______",
        "answer": "\\(xye^y\\)",
        "keyFormulas": [
          "f_x=ye^y",
          "f=xye^y+C(y).",
          "f_y=x(1+y)e^y",
          "C'(y)=0",
          "f(0,0)=0",
          "f(x,y)=xye^y."
        ],
        "guide": {
          "concept": "多元题先区分偏导数、方向导数、全微分和复合函数链式法则。偏导存在不自动推出连续或可微。",
          "method": "画依赖关系：外层变量对中间变量求偏导，中间变量再对自变量求导；每条路径的乘积相加。指定点最后再代入。",
          "pitfall": "二阶混合偏导只有在相应连续条件下才能随意交换次序；沿坐标轴极限不能代替二元极限。",
          "extension": "相邻考法包括极值、条件极值、切平面与法线。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648692",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=5",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2017-13",
        "year": 2017,
        "number": 13,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "一元积分",
        "question": "\\[\\int_0^1\\mathrm{d}y\\int_y^1\\frac{\\tan x}{x}\\mathrm{d}x=\n\\]",
        "answer": "\\(-\\ln\\cos1\\)",
        "keyFormulas": [
          "\\int_0^1\\mathrm{d}y\\int_y^1\\frac{\\tan x}{x}\\mathrm{d}x\n=\n\\int_0^1\\frac{\\tan x}{x}\\int_0^x\\mathrm{d}y\\,\\mathrm{d}x\n=\n\\int_0^1\\tan x\\,\\mathrm{d}x.",
          "-\\ln|\\cos x|\\bigg|_0^1=-\\ln\\cos1."
        ],
        "guide": {
          "concept": "先看结构再选方法：复合函数配导数用换元，乘积中一项求导变简单用分部积分，有理函数先做代数分解。",
          "method": "写出换元变量与新上下限；反常积分先把瑕点或无穷端点改写成极限；变上限积分先用微积分基本定理求导。",
          "pitfall": "不定积分别漏常数C；分段函数的原函数在分段点还必须连续；反常积分算出原函数不等于已经收敛，必须看极限。",
          "extension": "相邻考法包括积分比较、面积体积、积分不等式和含参积分。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648692",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=5",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2017-14",
        "year": 2017,
        "number": 14,
        "kind": "填空题",
        "subject": "线性代数",
        "topic": "特征值、特征向量与相似",
        "question": "设矩阵\n\\[\\boldsymbol A=\n\\begin{pmatrix}\n4&1&-2\\\\\n1&2&a\\\\\n3&1&-1\n\\end{pmatrix}\n\\]\n的一个特征向量为\n\\[\\begin{pmatrix}\n1\\\\\n1\\\\\n2\n\\end{pmatrix},\n\\]\n则 \\(a=\\) ______",
        "answer": "\\(-1\\)",
        "keyFormulas": [
          "\\boldsymbol A\\boldsymbol\\alpha=\\lambda\\boldsymbol\\alpha",
          "\\boldsymbol A\n\\begin{pmatrix}\n1\\\\1\\\\2\n\\end{pmatrix}\n=\n\\begin{pmatrix}\n1\\\\3+2a\\\\2\n\\end{pmatrix}\n=\n\\lambda\n\\begin{pmatrix}\n1\\\\1\\\\2\n\\end{pmatrix}.",
          "\\lambda=1",
          "3+2a=1",
          "a=-1"
        ],
        "guide": {
          "concept": "先用特征方程找特征值，再解 (A-λE)x=0。能否对角化取决于线性无关特征向量是否足够。",
          "method": "利用迹、行列式和已知特征向量简化；分别求每个特征值的特征子空间维数；按列组成 P，并保持特征值顺序一致。",
          "pitfall": "重特征值不等于一定不能对角化；相似矩阵特征值相同，但反过来不一定相似。",
          "extension": "相邻考法包括矩阵幂、二次型正交变换和实对称矩阵。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648692",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=5",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2017-15",
        "year": 2017,
        "number": 15,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "极限计算",
        "question": "求极限\n\\[\\lim_{x\\to0^+}\n\\frac{\\displaystyle\\int_0^x\\sqrt{x-t}e^t\\mathrm{d}t}{\\sqrt{x^3}}.\n\\]",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "u=x-t",
          "\\int_0^x\\sqrt{x-t}e^t\\mathrm{d}t\n=\ne^x\\int_0^x\\sqrt{u}e^{-u}\\mathrm{d}u.",
          "\\lim_{x\\to0^+}\n\\frac{e^x\\int_0^x\\sqrt{u}e^{-u}\\mathrm{d}u}{x^{3/2}}\n=\n\\lim_{x\\to0^+}\n\\frac{\\sqrt{x}e^{-x}}{\\frac32x^{1/2}}\n=\n\\frac23."
        ],
        "guide": {
          "concept": "极限题的关键不是一上来求导，而是先判断未定式类型，再选择等价无穷小、洛必达、泰勒、夹逼、单调有界或定积分定义。",
          "method": "第一行写清趋近方向和分子分母的量级；第二行处理主导项；第三行再约分或求导。遇到和式先试定积分定义，遇到递推先找单调性与界。",
          "pitfall": "连续使用洛必达会掩盖结构，也容易在不满足条件时误用。含绝对值、单侧极限和参数时必须分别检查。",
          "extension": "可联动复习无穷小比较、数列极限、函数极限和含参极限。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648692",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=5",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2017-16",
        "year": 2017,
        "number": 16,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "多元函数微分",
        "question": "设函数 \\(f(u,v)\\) 具有二阶连续偏导数，\n\\[y=f(e^x,\\cos x),\n\\]\n求\n\\[\\left.\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right|_{x=0},\n\\qquad\n\\left.\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2}\\right|_{x=0}.\n\\]",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "y'=f_1'e^x-f_2'\\sin x.",
          "\\left.y'\\right|_{x=0}=f_1'(1,1).",
          "x=0",
          "\\left.y''\\right|_{x=0}\n=\nf_{11}''(1,1)+f_1'(1,1)-f_2'(1,1)."
        ],
        "guide": {
          "concept": "多元题先区分偏导数、方向导数、全微分和复合函数链式法则。偏导存在不自动推出连续或可微。",
          "method": "画依赖关系：外层变量对中间变量求偏导，中间变量再对自变量求导；每条路径的乘积相加。指定点最后再代入。",
          "pitfall": "二阶混合偏导只有在相应连续条件下才能随意交换次序；沿坐标轴极限不能代替二元极限。",
          "extension": "相邻考法包括极值、条件极值、切平面与法线。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648692",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=5",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2017-17",
        "year": 2017,
        "number": 17,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "极限计算",
        "question": "求\n\\[\\lim_{n\\to\\infty}\\sum_{k=1}^n\\frac{k}{n^2}\\ln\\left(1+\\frac{k}{n}\\right).\n\\]",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "\\int_0^1x\\ln(1+x)\\mathrm{d}x.",
          "\\int_0^1x\\ln(1+x)\\mathrm{d}x\n=\n\\frac12\\ln2-\\frac12\\int_0^1\\frac{x^2}{1+x}\\mathrm{d}x\n=\n\\frac14."
        ],
        "guide": {
          "concept": "极限题的关键不是一上来求导，而是先判断未定式类型，再选择等价无穷小、洛必达、泰勒、夹逼、单调有界或定积分定义。",
          "method": "第一行写清趋近方向和分子分母的量级；第二行处理主导项；第三行再约分或求导。遇到和式先试定积分定义，遇到递推先找单调性与界。",
          "pitfall": "连续使用洛必达会掩盖结构，也容易在不满足条件时误用。含绝对值、单侧极限和参数时必须分别检查。",
          "extension": "可联动复习无穷小比较、数列极限、函数极限和含参极限。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648692",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=5",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2017-18",
        "year": 2017,
        "number": 18,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "常微分方程",
        "question": "已知函数 \\(y(x)\\) 由方程\n\\[x^3+y^3-3x+3y-2=0\n\\]\n确定，求 \\(y(x)\\) 的极值。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "3x^2+3y^2y'-3+3y'=0.",
          "y'=0",
          "x=\\pm1",
          "x=1,\\ y=1;\\qquad x=-1,\\ y=0.",
          "y''(1)=-1<0,\\qquad y''(-1)=2>0.",
          "y(1)=1,",
          "y(-1)=0."
        ],
        "guide": {
          "concept": "先识别类型：可分离、一阶线性、伯努利、可降阶或二阶常系数。类型判断比直接试算更重要。",
          "method": "齐次部分先解特征方程；非齐次项按形式设特解，若与齐次解共振就乘 x 的适当次幂；最后用初值确定常数。",
          "pitfall": "设特解时多项式次数、指数因子和三角组合都要保留；共振次数漏乘 x 是高频错误。",
          "extension": "相邻考法包括微分方程建模、曲线族和积分方程。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648692",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=5",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2017-19",
        "year": 2017,
        "number": 19,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "中值定理与零点证明",
        "question": "设函数 \\(f(x)\\) 在区间 \\([0,1]\\) 上具有二阶导数，且\n\\[f(1)>0,\\qquad \\lim_{x\\to0^+}\\frac{f(x)}{x}<0.\n\\]\n证明：\n（1）方程 \\(f(x)=0\\) 在区间 \\((0,1)\\) 内至少存在一个实根；\n（2）方程\n\\[f(x)f''(x)+\\left(f'(x)\\right)^2=0\n\\]\n在区间 \\((0,1)\\) 内至少存在两个不同实根。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "\\lim_{x\\to0^+}\\frac{f(x)}{x}<0",
          "f(0)=0",
          "x_0>0",
          "f(x_0)<0",
          "f(1)>0",
          "\\xi\\in(x_0,1)\\subset(0,1)",
          "f(\\xi)=0",
          "f(0)=f(\\xi)=0"
        ],
        "guide": {
          "concept": "存在性证明的核心是‘构造谁、在哪个区间用哪个定理’。目标式通常提示辅助函数的导数形式。",
          "method": "先用连续性和端点异号找零点；再根据目标式反推辅助函数。罗尔定理要逐项核对闭区间连续、开区间可导、端点函数值相等。",
          "pitfall": "只写‘由罗尔定理可得’但不说明区间与条件会丢步骤分；多个根要使用互不重叠的区间。",
          "extension": "常与积分中值定理、柯西中值定理、零点个数和不等式结合。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648692",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=5",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2017-20",
        "year": 2017,
        "number": 20,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "二重积分与区域变换",
        "question": "已知平面区域\n\\[D=\\{(x,y)\\mid x^2+y^2\\le2y\\},\n\\]\n计算二重积分\n\\[\\iint_D(x+1)^2\\mathrm{d}x\\mathrm{d}y.\n\\]",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "\\iint_D2x\\,\\mathrm{d}x\\mathrm{d}y=0",
          "\\iint_D(x+1)^2\\mathrm{d}x\\mathrm{d}y\n=\n\\iint_Dx^2\\mathrm{d}x\\mathrm{d}y+\\iint_D1\\,\\mathrm{d}x\\mathrm{d}y.",
          "0\\le\\theta\\le\\pi,\\ 0\\le r\\le2\\sin\\theta",
          "\\iint_Dx^2\\mathrm{d}x\\mathrm{d}y=\\frac{\\pi}{4},\\qquad\nS_D=\\pi.",
          "\\frac{5\\pi}{4}."
        ],
        "guide": {
          "concept": "二重积分先画区域。很多计算错误不是积分不会，而是上下限描述了错误的区域。",
          "method": "标出边界交点；选择先 x 后 y 或先 y 后 x；圆、扇形和只含 x²+y² 的结构优先考虑极坐标，并补上雅可比 r。",
          "pitfall": "交换积分次序必须重新写全部上下限；利用对称性前先检查区域和被积函数奇偶性。",
          "extension": "相邻考法包括体积、质心、变换积分次序和参数区域。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648692",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=5",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2017-21",
        "year": 2017,
        "number": 21,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "导数定义与高阶导数",
        "question": "设 \\(y(x)\\) 是区间 \\(\\left(0,\\frac32\\right)\\) 内的可导函数，且 \\(y(1)=0\\)。点 \\(P\\) 是曲线 \\(L:y=y(x)\\) 上任意一点，\\(L\\) 在点 \\(P\\) 处的切线与 \\(y\\) 轴相交于点 \\((0,Y_p)\\)，法线与 \\(x\\) 轴相交于点 \\((X_p,0)\\)。若 \\(X_p=Y_p\\)，求 \\(L\\) 上点的坐标 \\((x,y)\\) 满足的方程。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "P=(x,y)",
          "Y_p=y-xy',",
          "X_p=x+yy'.",
          "X_p=Y_p",
          "(x+y)y'=y-x.",
          "u=\\dfrac{y}{x}",
          "y=ux",
          "x\\frac{\\mathrm{d}u}{\\mathrm{d}x}\n=\n-\\frac{u^2+1}{u+1}."
        ],
        "guide": {
          "concept": "导数是局部变化率。分段点、绝对值点和题目指定点，优先回到导数定义，而不是机械套求导公式。",
          "method": "先求函数值，再写差商；左右分别化简并取极限。高阶导数题先观察幂级数或通项结构，避免重复求导。参数方程用 dy/dx=(dy/dt)/(dx/dt)。",
          "pitfall": "二阶参数导数还要再除一次 dx/dt；不要把对 t 求导直接当成对 x 求导。",
          "extension": "可联动切线法线、相关变化率、隐函数求导和曲率。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648692",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=5",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2017-22",
        "year": 2017,
        "number": 22,
        "kind": "解答题",
        "subject": "线性代数",
        "topic": "特征值、特征向量与相似",
        "question": "设 \\(3\\) 阶矩阵\n\\[\\boldsymbol A=(\\boldsymbol\\alpha_1,\\boldsymbol\\alpha_2,\\boldsymbol\\alpha_3)\n\\]\n有 \\(3\\) 个不同的特征值，且\n\\[\\boldsymbol\\alpha_3=\\boldsymbol\\alpha_1+2\\boldsymbol\\alpha_2.\n\\]\n（1）证明：\\(r(\\boldsymbol A)=2\\)；\n（2）若\n\\[\\boldsymbol\\beta=\\boldsymbol\\alpha_1+\\boldsymbol\\alpha_2+\\boldsymbol\\alpha_3,\n\\]\n求方程组 \\(\\boldsymbol A\\boldsymbol x=\\boldsymbol\\beta\\) 的通解。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "\\boldsymbol\\alpha_1+2\\boldsymbol\\alpha_2-\\boldsymbol\\alpha_3=\\boldsymbol0",
          "|\\boldsymbol A|=0",
          "\\boldsymbol A",
          "r(\\boldsymbol A)=2.",
          "\\boldsymbol A\n\\begin{pmatrix}\n1\\\\2\\\\-1\n\\end{pmatrix}\n=\\boldsymbol0",
          "\\begin{pmatrix}\n1\\\\2\\\\-1\n\\end{pmatrix}.",
          "\\boldsymbol A\n\\begin{pmatrix}\n1\\\\1\\\\1\n\\end{pmatrix}\n=\\boldsymbol\\beta,",
          "\\boldsymbol x\n=\n\\begin{pmatrix}\n1\\\\1\\\\1\n\\end{pmatrix}\n+\nk\n\\begin{pmatrix}\n1\\\\2\\\\-1\n\\end{pmatrix},\n\\qquad k\\in\\mathbb R."
        ],
        "guide": {
          "concept": "先用特征方程找特征值，再解 (A-λE)x=0。能否对角化取决于线性无关特征向量是否足够。",
          "method": "利用迹、行列式和已知特征向量简化；分别求每个特征值的特征子空间维数；按列组成 P，并保持特征值顺序一致。",
          "pitfall": "重特征值不等于一定不能对角化；相似矩阵特征值相同，但反过来不一定相似。",
          "extension": "相邻考法包括矩阵幂、二次型正交变换和实对称矩阵。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648692",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=5",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2017-23",
        "year": 2017,
        "number": 23,
        "kind": "解答题",
        "subject": "线性代数",
        "topic": "二次型",
        "question": "设二次型\n\\[f(x_1,x_2,x_3)\n=\n2x_1^2-x_2^2+ax_3^2\n+2x_1x_2-8x_1x_3+2x_2x_3\n\\]\n在正交变换 \\(\\boldsymbol X=\\boldsymbol Q\\boldsymbol Y\\) 下的标准型为\n\\[\\lambda_1y_1^2+\\lambda_2y_2^2.\n\\]\n求 \\(a\\) 的值及一个正交矩阵 \\(\\boldsymbol Q\\)。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "\\boldsymbol A=\n\\begin{pmatrix}\n2&1&-4\\\\\n1&-1&1\\\\\n-4&1&a\n\\end{pmatrix}.",
          "r(\\boldsymbol A)=2",
          "|\\boldsymbol A|=0.",
          "a=2.",
          "\\boldsymbol A=\n\\begin{pmatrix}\n2&1&-4\\\\\n1&-1&1\\\\\n-4&1&2\n\\end{pmatrix},",
          "-3,\\ 6,\\ 0.",
          "(1,-1,1)^T,\\quad (-1,0,1)^T,\\quad (1,2,1)^T.",
          "\\boldsymbol Q=\n\\begin{pmatrix}\n\\dfrac{1}{\\sqrt3}&-\\dfrac{1}{\\sqrt2}&\\dfrac{1}{\\sqrt6}\\\\\n-\\dfrac{1}{\\sqrt3}&0&\\dfrac{2}{\\sqrt6}\\\\\n\\dfrac{1}{\\sqrt3}&\\dfrac{1}{\\sqrt2}&\\dfrac{1}{\\sqrt6}\n\\end{pmatrix}."
        ],
        "guide": {
          "concept": "二次型先写对称矩阵，交叉项 2aᵢⱼxᵢxⱼ 对应矩阵中的 aᵢⱼ，而不是2aᵢⱼ。",
          "method": "配方法用于一般可逆线性变换；实对称矩阵正交对角化用特征值和单位正交特征向量；正定性可用顺序主子式。",
          "pitfall": "标准形系数与特征值只在正交变换下直接对应；规范形只保留正负号和零。",
          "extension": "相邻考法包括合同、惯性指数和矩阵正定性。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648692",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=5",
        "videoExtraUrl": ""
      }
    ]
  },
  {
    "year": 2018,
    "videoPage": 8,
    "items": [
      {
        "id": "math2-2018-1",
        "year": 2018,
        "number": 1,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "极限计算",
        "question": "若\n\\[\\lim_{x \\to 0}\\left(e^{x}+a x^{2}+b x\\right)^{\\frac{1}{x^{2}}}=1,\n\\]\n则 \\(\\left(\\ \\right)\\)\n（A）\\(a=\\dfrac{1}{2},\\ b=-1\\)\n（B）\\(a=-\\dfrac{1}{2},\\ b=-1\\)\n（C）\\(a=\\dfrac{1}{2},\\ b=1\\)\n（D）\\(a=-\\dfrac{1}{2},\\ b=1\\)",
        "answer": "B",
        "keyFormulas": [
          "u=e^{x}+a x^{2}+b x-1.",
          "e^{\\lim\\limits_{x \\to 0}u/x^{2}}=1",
          "\\lim_{x \\to 0}\\frac{e^{x}+a x^{2}+b x-1}{x^{2}}=0.",
          "1+b=0",
          "b=-1",
          "\\frac{1}{2}+a=0",
          "a=-\\dfrac{1}{2}"
        ],
        "guide": {
          "concept": "极限题的关键不是一上来求导，而是先判断未定式类型，再选择等价无穷小、洛必达、泰勒、夹逼、单调有界或定积分定义。",
          "method": "第一行写清趋近方向和分子分母的量级；第二行处理主导项；第三行再约分或求导。遇到和式先试定积分定义，遇到递推先找单调性与界。",
          "pitfall": "连续使用洛必达会掩盖结构，也容易在不满足条件时误用。含绝对值、单侧极限和参数时必须分别检查。",
          "extension": "可联动复习无穷小比较、数列极限、函数极限和含参极限。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648638",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=8",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2018-2",
        "year": 2018,
        "number": 2,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "极限计算",
        "question": "下列函数中，在 \\(x=0\\) 处不可导的是 \\(\\left(\\ \\right)\\)\n（A）\\(f(x)=|x|\\sin |x|\\)\n（B）\\(f(x)=|x|\\sin \\sqrt{|x|}\\)\n（C）\\(f(x)=\\cos |x|\\)\n（D）\\(f(x)=\\cos \\sqrt{|x|}\\)",
        "answer": "D",
        "keyFormulas": [
          "f'(0)=\\lim_{x \\to 0}\\frac{f(x)-f(0)}{x}.",
          "\\lim_{x \\to 0}\\frac{\\cos\\sqrt{|x|}-1}{x}\n\\sim\n-\\frac{1}{2}\\lim_{x \\to 0}\\frac{|x|}{x}"
        ],
        "guide": {
          "concept": "极限题的关键不是一上来求导，而是先判断未定式类型，再选择等价无穷小、洛必达、泰勒、夹逼、单调有界或定积分定义。",
          "method": "第一行写清趋近方向和分子分母的量级；第二行处理主导项；第三行再约分或求导。遇到和式先试定积分定义，遇到递推先找单调性与界。",
          "pitfall": "连续使用洛必达会掩盖结构，也容易在不满足条件时误用。含绝对值、单侧极限和参数时必须分别检查。",
          "extension": "可联动复习无穷小比较、数列极限、函数极限和含参极限。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648638",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=8",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2018-3",
        "year": 2018,
        "number": 3,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "连续、间断与渐近线",
        "question": "设\n\\[f(x)=\n\\begin{cases}\n-1, & x<0,\\\\\n1, & x\\geq 0,\n\\end{cases}\n\\qquad\ng(x)=\n\\begin{cases}\n2-a x, & x\\leq -1,\\\\\nx, & -1<x<0,\\\\\nx-b, & x\\geq 0.\n\\end{cases}\n\\]\n若 \\(f(x)+g(x)\\) 在 \\(\\mathbb{R}\\) 上连续，则 \\(\\left(\\ \\right)\\)\n（A）\\(a=3,\\ b=1\\)\n（B）\\(a=3,\\ b=2\\)\n（C）\\(a=-3,\\ b=1\\)\n（D）\\(a=-3,\\ b=2\\)",
        "answer": "D",
        "keyFormulas": [
          "f(x)+g(x)=\n\\begin{cases}\n1-a x, & x\\leq -1,\\\\\nx-1, & -1<x<0,\\\\\nx+1-b, & x\\geq 0.\n\\end{cases}",
          "x=-1",
          "1+a=-2",
          "a=-3",
          "x=0",
          "-1=1-b",
          "b=2"
        ],
        "guide": {
          "concept": "先列出所有可能出问题的点：分母为0、对数真数不正、根式越界以及分段点。连续要求极限存在并等于函数值。",
          "method": "对每个候选点分别算左右极限；渐近线则按垂直、水平、斜渐近线三类依次检查，斜渐近线用 k=lim f(x)/x、b=lim[f(x)-kx]。",
          "pitfall": "函数在点处有定义不代表连续；无定义也不代表一定是无穷间断。渐近线要区分 x→+∞ 与 x→-∞。",
          "extension": "相邻考法包括原函数存在性、可导与连续关系、间断点分类。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648638",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=8",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2018-4",
        "year": 2018,
        "number": 4,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "导数定义与高阶导数",
        "question": "设函数 \\(f(x)\\) 在 \\([0,1]\\) 上二阶可导，且\n\\[\\int_0^1 f(x)\\,\\mathrm{d}x=0,\n\\]\n则 \\(\\left(\\ \\right)\\)\n（A）当 \\(f'(x)<0\\) 时，\\(f\\left(\\dfrac12\\right)<0\\)\n（B）当 \\(f''(x)<0\\) 时，\\(f\\left(\\dfrac12\\right)<0\\)\n（C）当 \\(f'(x)>0\\) 时，\\(f\\left(\\dfrac12\\right)<0\\)\n（D）当 \\(f''(x)>0\\) 时，\\(f\\left(\\dfrac12\\right)<0\\)",
        "answer": "D",
        "keyFormulas": [
          "f(x)=\\dfrac12-x",
          "f(x)=x-\\dfrac12",
          "f''(x)>0",
          "f(x)>f\\left(\\frac12\\right)+f'\\left(\\frac12\\right)\\left(x-\\frac12\\right).",
          "[0,1]",
          "0=\\int_0^1 f(x)\\,\\mathrm{d}x>f\\left(\\frac12\\right),"
        ],
        "guide": {
          "concept": "导数是局部变化率。分段点、绝对值点和题目指定点，优先回到导数定义，而不是机械套求导公式。",
          "method": "先求函数值，再写差商；左右分别化简并取极限。高阶导数题先观察幂级数或通项结构，避免重复求导。参数方程用 dy/dx=(dy/dt)/(dx/dt)。",
          "pitfall": "二阶参数导数还要再除一次 dx/dt；不要把对 t 求导直接当成对 x 求导。",
          "extension": "可联动切线法线、相关变化率、隐函数求导和曲率。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648638",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=8",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2018-5",
        "year": 2018,
        "number": 5,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "综合应用",
        "question": "设\n\\[M=\\int_{-\\frac{\\pi}{2}}^{\\frac{\\pi}{2}}\\frac{(1+x)^2}{1+x^2}\\,\\mathrm{d}x,\\quad\nN=\\int_{-\\frac{\\pi}{2}}^{\\frac{\\pi}{2}}\\frac{1+x}{e^x}\\,\\mathrm{d}x,\\quad\nK=\\int_{-\\frac{\\pi}{2}}^{\\frac{\\pi}{2}}\\left(1+\\sqrt{\\cos x}\\right)\\,\\mathrm{d}x,\n\\]\n则 \\(\\left(\\ \\right)\\)\n（A）\\(M>N>K\\)\n（B）\\(M>K>N\\)\n（C）\\(K>M>N\\)\n（D）\\(K>N>M\\)",
        "answer": "C",
        "keyFormulas": [
          "\\frac{(1+x)^2}{1+x^2}=1+\\frac{2x}{1+x^2},",
          "\\dfrac{2x}{1+x^2}",
          "M=\\int 1\\,\\mathrm{d}x",
          "e^x>1+x",
          "N<M",
          "1+\\sqrt{\\cos x}>1",
          "K>M",
          "K>M>N."
        ],
        "guide": {
          "concept": "先判断题目属于高等数学还是线性代数，并把题干中的已知条件、所求对象和限制范围分别圈出。",
          "method": "选择最直接的定义或定理，先写公式，再代条件，保留关键中间步骤，最后用答案反查题意。",
          "pitfall": "不要在读题未完成时开始心算；符号、定义域、单侧条件和矩阵乘法顺序都是高频失分点。",
          "extension": "做完后把本题归入对应专题，再找一道同方法不同外观的题复做。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648638",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=8",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2018-6",
        "year": 2018,
        "number": 6,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "一元积分",
        "question": "\\[\\int_{-1}^{0}\\mathrm{d}x\\int_{-x}^{2-x^{2}}(1-xy)\\,\\mathrm{d}y\n+\n\\int_{0}^{1}\\mathrm{d}x\\int_{x}^{2-x^{2}}(1-xy)\\,\\mathrm{d}y\n=\n\\left(\\ \\right)\n\\]\n（A）\\(\\dfrac{5}{3}\\)\n（B）\\(\\dfrac{5}{6}\\)\n（C）\\(\\dfrac{7}{3}\\)\n（D）\\(\\dfrac{7}{6}\\)",
        "answer": "C",
        "keyFormulas": [
          "2\\int_0^1\\int_x^{2-x^2}1\\,\\mathrm{d}y\\,\\mathrm{d}x\n=\n2\\int_0^1(2-x^2-x)\\,\\mathrm{d}x\n=\n\\frac{7}{3}."
        ],
        "guide": {
          "concept": "先看结构再选方法：复合函数配导数用换元，乘积中一项求导变简单用分部积分，有理函数先做代数分解。",
          "method": "写出换元变量与新上下限；反常积分先把瑕点或无穷端点改写成极限；变上限积分先用微积分基本定理求导。",
          "pitfall": "不定积分别漏常数C；分段函数的原函数在分段点还必须连续；反常积分算出原函数不等于已经收敛，必须看极限。",
          "extension": "相邻考法包括积分比较、面积体积、积分不等式和含参积分。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648638",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=8",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2018-7",
        "year": 2018,
        "number": 7,
        "kind": "单项选择题",
        "subject": "线性代数",
        "topic": "特征值、特征向量与相似",
        "question": "下列矩阵中，与矩阵\n\\[\\begin{pmatrix}\n1&1&0\\\\\n0&1&1\\\\\n0&0&1\n\\end{pmatrix}\n\\]\n相似的是 \\(\\left(\\ \\right)\\)\n（A）\\(\\begin{pmatrix}1&1&-1\\\\0&1&1\\\\0&0&1\\end{pmatrix}\\)\n（B）\\(\\begin{pmatrix}1&0&-1\\\\0&1&1\\\\0&0&1\\end{pmatrix}\\)\n（C）\\(\\begin{pmatrix}1&1&-1\\\\0&1&0\\\\0&0&1\\end{pmatrix}\\)\n（D）\\(\\begin{pmatrix}1&0&-1\\\\0&1&0\\\\0&0&1\\end{pmatrix}\\)",
        "answer": "A",
        "keyFormulas": [
          "P=\\begin{pmatrix}\n1&-1&0\\\\\n0&1&0\\\\\n0&0&1\n\\end{pmatrix},\n\\qquad\nP^{-1}=\\begin{pmatrix}\n1&1&0\\\\\n0&1&0\\\\\n0&0&1\n\\end{pmatrix}.",
          "P^{-1}\n\\begin{pmatrix}\n1&1&0\\\\\n0&1&1\\\\\n0&0&1\n\\end{pmatrix}\nP\n=\n\\begin{pmatrix}\n1&1&-1\\\\\n0&1&1\\\\\n0&0&1\n\\end{pmatrix}."
        ],
        "guide": {
          "concept": "先用特征方程找特征值，再解 (A-λE)x=0。能否对角化取决于线性无关特征向量是否足够。",
          "method": "利用迹、行列式和已知特征向量简化；分别求每个特征值的特征子空间维数；按列组成 P，并保持特征值顺序一致。",
          "pitfall": "重特征值不等于一定不能对角化；相似矩阵特征值相同，但反过来不一定相似。",
          "extension": "相邻考法包括矩阵幂、二次型正交变换和实对称矩阵。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648638",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=8",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2018-8",
        "year": 2018,
        "number": 8,
        "kind": "单项选择题",
        "subject": "线性代数",
        "topic": "向量组与线性相关",
        "question": "设 \\(\\boldsymbol A,\\boldsymbol B\\) 为 \\(n\\) 阶矩阵，记 \\(r(\\boldsymbol X)\\) 为矩阵 \\(\\boldsymbol X\\) 的秩，\\((\\boldsymbol X,\\boldsymbol Y)\\) 表示分块矩阵，则 \\(\\left(\\ \\right)\\)\n（A）\\(r(\\boldsymbol A,\\boldsymbol A\\boldsymbol B)=r(\\boldsymbol A)\\)\n（B）\\(r(\\boldsymbol A,\\boldsymbol B\\boldsymbol A)=r(\\boldsymbol A)\\)\n（C）\\(r(\\boldsymbol A,\\boldsymbol B)=\\max\\{r(\\boldsymbol A),r(\\boldsymbol B)\\}\\)\n（D）\\(r(\\boldsymbol A,\\boldsymbol B)=r(\\boldsymbol A^T,\\boldsymbol B^T)\\)",
        "answer": "A",
        "keyFormulas": [
          "(\\boldsymbol A,\\boldsymbol A\\boldsymbol B)\n=\n\\boldsymbol A(\\boldsymbol E,\\boldsymbol B),",
          "r(\\boldsymbol E,\\boldsymbol B)=n",
          "r(\\boldsymbol A,\\boldsymbol A\\boldsymbol B)=r(\\boldsymbol A)."
        ],
        "guide": {
          "concept": "线性相关的本质是能否找到不全为0的系数组合成零向量；秩等于最大线性无关组所含向量数。",
          "method": "把向量按列组成矩阵并做行化简；主元列给出最大无关组；自由变量对应齐次方程基础解系。",
          "pitfall": "不要把行化简后的列直接当成原向量组的最大无关组；选列应回到原矩阵对应位置。",
          "extension": "相邻考法包括线性表示、秩不等式和解空间维数。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648638",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=8",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2018-9",
        "year": 2018,
        "number": 9,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "中值定理与零点证明",
        "question": "\\[\\lim_{x\\to+\\infty}x^2\\left[\\arctan(x+1)-\\arctan x\\right]\n=\n\\underline{\\qquad}\n\\]",
        "answer": "\\(1\\)",
        "keyFormulas": [
          "\\xi\\in(x,x+1)",
          "\\arctan(x+1)-\\arctan x=\\frac{1}{1+\\xi^2}.",
          "\\lim_{x\\to+\\infty}\\frac{x^2}{1+\\xi^2}=1."
        ],
        "guide": {
          "concept": "存在性证明的核心是‘构造谁、在哪个区间用哪个定理’。目标式通常提示辅助函数的导数形式。",
          "method": "先用连续性和端点异号找零点；再根据目标式反推辅助函数。罗尔定理要逐项核对闭区间连续、开区间可导、端点函数值相等。",
          "pitfall": "只写‘由罗尔定理可得’但不说明区间与条件会丢步骤分；多个根要使用互不重叠的区间。",
          "extension": "常与积分中值定理、柯西中值定理、零点个数和不等式结合。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648638",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=8",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2018-10",
        "year": 2018,
        "number": 10,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "常微分方程",
        "question": "曲线\n\\[y=x^2+2\\ln x\n\\]\n在其拐点处的切线方程是 \\(\\underline{\\qquad}\\)",
        "answer": "\\(y=4x-3\\)",
        "keyFormulas": [
          "y'=2x+\\frac{2}{x},\\qquad\ny''=2-\\frac{2}{x^2}.",
          "y''=0",
          "x=1",
          "(1,1)",
          "y'(1)=4",
          "y-1=4(x-1),",
          "y=4x-3"
        ],
        "guide": {
          "concept": "先识别类型：可分离、一阶线性、伯努利、可降阶或二阶常系数。类型判断比直接试算更重要。",
          "method": "齐次部分先解特征方程；非齐次项按形式设特解，若与齐次解共振就乘 x 的适当次幂；最后用初值确定常数。",
          "pitfall": "设特解时多项式次数、指数因子和三角组合都要保留；共振次数漏乘 x 是高频错误。",
          "extension": "相邻考法包括微分方程建模、曲线族和积分方程。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648638",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=8",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2018-11",
        "year": 2018,
        "number": 11,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "综合应用",
        "question": "\\[\\int_{5}^{+\\infty}\\frac{1}{x^2-4x+3}\\,\\mathrm{d}x\n=\n\\underline{\\qquad}\n\\]",
        "answer": "\\(\\dfrac{1}{2}\\ln 2\\)",
        "keyFormulas": [
          "\\frac{1}{x^2-4x+3}\n=\n\\frac12\\left(\\frac{1}{x-3}-\\frac{1}{x-1}\\right),",
          "\\int_5^{+\\infty}\\frac{1}{x^2-4x+3}\\,\\mathrm{d}x\n=\n\\frac12\\ln\\left|\\frac{x-3}{x-1}\\right|\\Bigg|_5^{+\\infty}\n=\n\\frac12\\ln2."
        ],
        "guide": {
          "concept": "先判断题目属于高等数学还是线性代数，并把题干中的已知条件、所求对象和限制范围分别圈出。",
          "method": "选择最直接的定义或定理，先写公式，再代条件，保留关键中间步骤，最后用答案反查题意。",
          "pitfall": "不要在读题未完成时开始心算；符号、定义域、单侧条件和矩阵乘法顺序都是高频失分点。",
          "extension": "做完后把本题归入对应专题，再找一道同方法不同外观的题复做。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648638",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=8",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2018-12",
        "year": 2018,
        "number": 12,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "常微分方程",
        "question": "曲线\n\\[\\begin{cases}\nx=\\cos^3 t,\\\\\ny=\\sin^3 t\n\\end{cases}\n\\]\n在 \\(t=\\dfrac{\\pi}{4}\\) 对应点处的曲率为 \\(\\underline{\\qquad}\\)",
        "answer": "\\(\\dfrac{2}{3}\\)",
        "keyFormulas": [
          "\\frac{\\mathrm{d}y}{\\mathrm{d}x}=-\\tan t,\n\\qquad\n\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2}\n=\n\\frac{1}{3\\cos^4 t\\sin t}.",
          "t=\\dfrac{\\pi}{4}",
          "y'=-1,\\qquad y''=\\frac{4\\sqrt2}{3}.",
          "k=\\frac{|y''|}{[1+(y')^2]^{3/2}}=\\frac{2}{3}."
        ],
        "guide": {
          "concept": "先识别类型：可分离、一阶线性、伯努利、可降阶或二阶常系数。类型判断比直接试算更重要。",
          "method": "齐次部分先解特征方程；非齐次项按形式设特解，若与齐次解共振就乘 x 的适当次幂；最后用初值确定常数。",
          "pitfall": "设特解时多项式次数、指数因子和三角组合都要保留；共振次数漏乘 x 是高频错误。",
          "extension": "相邻考法包括微分方程建模、曲线族和积分方程。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648638",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=8",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2018-13",
        "year": 2018,
        "number": 13,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "综合应用",
        "question": "设函数 \\(z=z(x,y)\\) 由方程\n\\[\\ln z+e^{z-1}=xy\n\\]\n确定，则\n\\[\\left.\\frac{\\partial z}{\\partial x}\\right|_{\\left(2,\\frac12\\right)}\n=\n\\underline{\\qquad}\n\\]",
        "answer": "\\(\\dfrac{1}{4}\\)",
        "keyFormulas": [
          "(x,y)=\\left(2,\\dfrac12\\right)",
          "z=1",
          "F(x,y,z)=\\ln z+e^{z-1}-xy,",
          "z_x=-\\frac{F_x}{F_z}\n=\n\\frac{y}{\\frac1z+e^{z-1}}.",
          "x=2,\\ y=\\dfrac12,\\ z=1",
          "z_x=\\dfrac14"
        ],
        "guide": {
          "concept": "先判断题目属于高等数学还是线性代数，并把题干中的已知条件、所求对象和限制范围分别圈出。",
          "method": "选择最直接的定义或定理，先写公式，再代条件，保留关键中间步骤，最后用答案反查题意。",
          "pitfall": "不要在读题未完成时开始心算；符号、定义域、单侧条件和矩阵乘法顺序都是高频失分点。",
          "extension": "做完后把本题归入对应专题，再找一道同方法不同外观的题复做。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648638",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=8",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2018-14",
        "year": 2018,
        "number": 14,
        "kind": "填空题",
        "subject": "线性代数",
        "topic": "向量组与线性相关",
        "question": "设 \\(\\boldsymbol A\\) 为 \\(3\\) 阶矩阵，\\(\\boldsymbol\\alpha_1,\\boldsymbol\\alpha_2,\\boldsymbol\\alpha_3\\) 为线性无关的向量组。若\n\\[\\boldsymbol A\\boldsymbol\\alpha_1=2\\boldsymbol\\alpha_1+\\boldsymbol\\alpha_2+\\boldsymbol\\alpha_3,\n\\]\n\\[\\boldsymbol A\\boldsymbol\\alpha_2=\\boldsymbol\\alpha_2+2\\boldsymbol\\alpha_3,\n\\qquad\n\\boldsymbol A\\boldsymbol\\alpha_3=-\\boldsymbol\\alpha_2+\\boldsymbol\\alpha_3,\n\\]\n则 \\(|\\boldsymbol A|=\\underline{\\qquad}\\)",
        "answer": "\\(2\\)",
        "keyFormulas": [
          "P=(\\boldsymbol\\alpha_1,\\boldsymbol\\alpha_2,\\boldsymbol\\alpha_3).",
          "AP=P\n\\begin{pmatrix}\n2&0&0\\\\\n1&1&-1\\\\\n1&2&1\n\\end{pmatrix},",
          "|A|=\n\\begin{vmatrix}\n2&0&0\\\\\n1&1&-1\\\\\n1&2&1\n\\end{vmatrix}\n=2."
        ],
        "guide": {
          "concept": "线性相关的本质是能否找到不全为0的系数组合成零向量；秩等于最大线性无关组所含向量数。",
          "method": "把向量按列组成矩阵并做行化简；主元列给出最大无关组；自由变量对应齐次方程基础解系。",
          "pitfall": "不要把行化简后的列直接当成原向量组的最大无关组；选列应回到原矩阵对应位置。",
          "extension": "相邻考法包括线性表示、秩不等式和解空间维数。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648638",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=8",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2018-15",
        "year": 2018,
        "number": 15,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "一元积分",
        "question": "求不定积分\n\\[\\int e^{2x}\\arctan\\sqrt{e^x-1}\\,\\mathrm{d}x.\n\\]",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "u=\\arctan\\sqrt{e^x-1},\\qquad \\mathrm{d}v=e^{2x}\\,\\mathrm{d}x.",
          "\\mathrm{d}u=\\frac{1}{2\\sqrt{e^x-1}}\\,\\mathrm{d}x,\\qquad\nv=\\frac12e^{2x}.",
          "\\int e^{2x}\\arctan\\sqrt{e^x-1}\\,\\mathrm{d}x\n=\n\\frac12e^{2x}\\arctan\\sqrt{e^x-1}\n-\\frac14\\int\\frac{e^{2x}}{\\sqrt{e^x-1}}\\,\\mathrm{d}x.",
          "t=\\sqrt{e^x-1}",
          "\\int\\frac{e^{2x}}{\\sqrt{e^x-1}}\\,\\mathrm{d}x\n=\n2\\int(t^2+1)\\,\\mathrm{d}t\n=\n\\frac23t^3+2t.",
          "\\boxed{\n\\int e^{2x}\\arctan\\sqrt{e^x-1}\\,\\mathrm{d}x\n=\n\\frac12e^{2x}\\arctan\\sqrt{e^x-1}\n-\\frac16(e^x-1)^{3/2}\n-\\frac12\\sqrt{e^x-1}\n+C\n}."
        ],
        "guide": {
          "concept": "先看结构再选方法：复合函数配导数用换元，乘积中一项求导变简单用分部积分，有理函数先做代数分解。",
          "method": "写出换元变量与新上下限；反常积分先把瑕点或无穷端点改写成极限；变上限积分先用微积分基本定理求导。",
          "pitfall": "不定积分别漏常数C；分段函数的原函数在分段点还必须连续；反常积分算出原函数不等于已经收敛，必须看极限。",
          "extension": "相邻考法包括积分比较、面积体积、积分不等式和含参积分。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648638",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=8",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2018-16",
        "year": 2018,
        "number": 16,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "连续、间断与渐近线",
        "question": "已知连续函数 \\(f(x)\\) 满足\n\\[\\int_0^x f(t)\\,\\mathrm{d}t+\\int_0^x t f(x-t)\\,\\mathrm{d}t=ax^2.\n\\]\n（1）求 \\(f(x)\\)；\n（2）若 \\(f(x)\\) 在区间 \\([0,1]\\) 上的平均值为 \\(1\\)，求 \\(a\\) 的值。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "u=x-t",
          "\\int_0^x f(t)\\,\\mathrm{d}t+x\\int_0^x f(u)\\,\\mathrm{d}u-\\int_0^x u f(u)\\,\\mathrm{d}u=ax^2.",
          "f(x)+\\int_0^x f(u)\\,\\mathrm{d}u=2ax.",
          "F(x)=\\int_0^x f(u)\\,\\mathrm{d}u",
          "F'(x)+F(x)=2ax,\\qquad F(0)=0.",
          "F(x)=2ax-2a+2ae^{-x},",
          "f(x)=F'(x)=2a(1-e^{-x}).",
          "\\int_0^1 f(x)\\,\\mathrm{d}x=1."
        ],
        "guide": {
          "concept": "先列出所有可能出问题的点：分母为0、对数真数不正、根式越界以及分段点。连续要求极限存在并等于函数值。",
          "method": "对每个候选点分别算左右极限；渐近线则按垂直、水平、斜渐近线三类依次检查，斜渐近线用 k=lim f(x)/x、b=lim[f(x)-kx]。",
          "pitfall": "函数在点处有定义不代表连续；无定义也不代表一定是无穷间断。渐近线要区分 x→+∞ 与 x→-∞。",
          "extension": "相邻考法包括原函数存在性、可导与连续关系、间断点分类。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648638",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=8",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2018-17",
        "year": 2018,
        "number": 17,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "二重积分与区域变换",
        "question": "设平面区域 \\(D\\) 由曲线\n\\[\\begin{cases}\nx=t-\\sin t,\\\\\ny=1-\\cos t\n\\end{cases}\n\\qquad\n0\\leq t\\leq 2\\pi\n\\]\n与 \\(x\\) 轴围成，计算二重积分\n\\[\\iint_D(x+2y)\\,\\mathrm{d}x\\,\\mathrm{d}y.\n\\]",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "y=\\varphi(x)",
          "\\iint_D(x+2y)\\,\\mathrm{d}x\\,\\mathrm{d}y\n=\n\\int_0^{2\\pi}\\left[x\\varphi(x)+\\varphi^2(x)\\right]\\,\\mathrm{d}x.",
          "x=t-\\sin t,\\qquad y=1-\\cos t,\\qquad \\mathrm{d}x=(1-\\cos t)\\,\\mathrm{d}t,",
          "\\int_0^{2\\pi}\\left[(t-\\sin t)(1-\\cos t)+(1-\\cos t)^2\\right](1-\\cos t)\\,\\mathrm{d}t.",
          "\\boxed{\\iint_D(x+2y)\\,\\mathrm{d}x\\,\\mathrm{d}y=3\\pi^2+5\\pi}."
        ],
        "guide": {
          "concept": "二重积分先画区域。很多计算错误不是积分不会，而是上下限描述了错误的区域。",
          "method": "标出边界交点；选择先 x 后 y 或先 y 后 x；圆、扇形和只含 x²+y² 的结构优先考虑极坐标，并补上雅可比 r。",
          "pitfall": "交换积分次序必须重新写全部上下限；利用对称性前先检查区域和被积函数奇偶性。",
          "extension": "相邻考法包括体积、质心、变换积分次序和参数区域。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648638",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=8",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2018-18",
        "year": 2018,
        "number": 18,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "中值定理与零点证明",
        "question": "已知常数 \\(k\\geq \\ln2-1\\)。证明：\n\\[(x-1)(x-\\ln^2x+2k\\ln x-1)\\geq 0,\\qquad x>0.\n\\]",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "f(x)=x-\\ln^2x+2k\\ln x-1,\n\\qquad\ng(x)=x-2\\ln x+2k.",
          "f'(x)=\\frac{g(x)}{x}.",
          "0<x<1",
          "g'(x)=1-\\dfrac2x<0",
          "g(x)>g(1)=1+2k\\geq 2\\ln2-1>0.",
          "f'(x)>0",
          "f(x)\\leq f(1)=0",
          "x-1<0"
        ],
        "guide": {
          "concept": "存在性证明的核心是‘构造谁、在哪个区间用哪个定理’。目标式通常提示辅助函数的导数形式。",
          "method": "先用连续性和端点异号找零点；再根据目标式反推辅助函数。罗尔定理要逐项核对闭区间连续、开区间可导、端点函数值相等。",
          "pitfall": "只写‘由罗尔定理可得’但不说明区间与条件会丢步骤分；多个根要使用互不重叠的区间。",
          "extension": "常与积分中值定理、柯西中值定理、零点个数和不等式结合。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648638",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=8",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2018-19",
        "year": 2018,
        "number": 19,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "定积分的几何与物理应用",
        "question": "将长为 \\(2\\mathrm{m}\\) 的铁丝分成三段，依次围成圆、正方形与正三角形。问：三个图形的面积和是否存在最小值？若存在，求出最小值。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "x,y,z",
          "x+y+z=2.",
          "S=\\frac{x^2}{4\\pi}+\\frac{\\sqrt3\\,y^2}{36}+\\frac{z^2}{16}.",
          "\\frac{x}{2\\pi}=\\frac{y}{6\\sqrt3}=\\frac{z}{8},\n\\qquad\nx+y+z=2.",
          "x:y:z=2\\pi:6\\sqrt3:8.",
          "\\boxed{\nS_{\\min}=\\frac{1}{\\pi+4+3\\sqrt3}\n}."
        ],
        "guide": {
          "concept": "先把几何量写成微元：面积、体积、弧长、压力或功，再决定沿哪个变量累加。",
          "method": "画图并标出典型小条；写微元公式；确定积分区间；最后检查结果量纲和正负。旋转体要先确认绕哪条轴。",
          "pitfall": "把半径、直径和到旋转轴的距离混淆，会让结果成倍出错；物理题还要统一单位。",
          "extension": "相邻考法包括相关变化率、最值和二重积分应用。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648638",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=8",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2018-20",
        "year": 2018,
        "number": 20,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "定积分的几何与物理应用",
        "question": "已知曲线\n\\[L:y=\\frac49x^2\\quad (x\\geq 0),\n\\]\n点 \\(O(0,0)\\)，点 \\(A(0,1)\\)。设 \\(P\\) 是 \\(L\\) 上的动点，\\(S\\) 是直线 \\(OA\\) 与直线 \\(AP\\) 及曲线 \\(L\\) 所围成图形的面积。若 \\(P\\) 运动到点 \\((3,4)\\) 时沿 \\(x\\) 轴正向的速度是 \\(4\\)，求此时 \\(S\\) 关于时间 \\(t\\) 的变化率。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "P=\\left(x(t),\\frac49x^2(t)\\right).",
          "S(t)=\\frac12\\left(1+\\frac49x^2(t)\\right)x(t)-\\int_0^{x(t)}\\frac49u^2\\,\\mathrm{d}u\n=\n\\frac12x(t)+\\frac{2}{27}x^3(t).",
          "S'(t)=\\left(\\frac12+\\frac29x^2(t)\\right)x'(t).",
          "x=3,\\ x'=4",
          "S'(t)=\\left(\\frac12+2\\right)\\cdot4=10.",
          "\\boxed{10}."
        ],
        "guide": {
          "concept": "先把几何量写成微元：面积、体积、弧长、压力或功，再决定沿哪个变量累加。",
          "method": "画图并标出典型小条；写微元公式；确定积分区间；最后检查结果量纲和正负。旋转体要先确认绕哪条轴。",
          "pitfall": "把半径、直径和到旋转轴的距离混淆，会让结果成倍出错；物理题还要统一单位。",
          "extension": "相邻考法包括相关变化率、最值和二重积分应用。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648638",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=8",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2018-21",
        "year": 2018,
        "number": 21,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "中值定理与零点证明",
        "question": "设数列 \\(\\{x_n\\}\\) 满足：\n\\[x_1>0,\\qquad\nx_n e^{x_{n+1}}=e^{x_n}-1\\quad(n=1,2,\\cdots).\n\\]\n证明 \\(\\{x_n\\}\\) 收敛，并求\n\\[\\lim_{n\\to\\infty}x_n.\n\\]",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "x>0",
          "e^x-1>x",
          "x_n>0",
          "x_{n+1}=\\ln\\frac{e^{x_n}-1}{x_n}>0.",
          "\\{x_n\\}",
          "\\frac{e^{x_n}-1}{x_n}=e^\\xi,\\qquad 0<\\xi<x_n.",
          "x_{n+1}=\\xi<x_n.",
          "A e^A=e^A-1."
        ],
        "guide": {
          "concept": "存在性证明的核心是‘构造谁、在哪个区间用哪个定理’。目标式通常提示辅助函数的导数形式。",
          "method": "先用连续性和端点异号找零点；再根据目标式反推辅助函数。罗尔定理要逐项核对闭区间连续、开区间可导、端点函数值相等。",
          "pitfall": "只写‘由罗尔定理可得’但不说明区间与条件会丢步骤分；多个根要使用互不重叠的区间。",
          "extension": "常与积分中值定理、柯西中值定理、零点个数和不等式结合。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648638",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=8",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2018-22",
        "year": 2018,
        "number": 22,
        "kind": "解答题",
        "subject": "线性代数",
        "topic": "二次型",
        "question": "设实二次型\n\\[f(x_1,x_2,x_3)\n=\n(x_1-x_2+x_3)^2+(x_2+x_3)^2+(x_1+a x_3)^2,\n\\]\n其中 \\(a\\) 是参数。\n（1）求 \\(f(x_1,x_2,x_3)=0\\) 的解；\n（2）求 \\(f(x_1,x_2,x_3)\\) 的规范形。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "f=0",
          "\\begin{cases}\nx_1-x_2+x_3=0,\\\\\nx_2+x_3=0,\\\\\nx_1+a x_3=0.\n\\end{cases}",
          "\\begin{pmatrix}\n1&0&2\\\\\n0&1&1\\\\\n0&0&a-2\n\\end{pmatrix}.",
          "a\\neq2",
          "a=2",
          "\\boldsymbol x=k(2,1,-1)^T,\\qquad k\\in\\mathbb R.",
          "y_1=x_1-x_2+x_3,\\quad\ny_2=x_2+x_3,\\quad\ny_3=x_1+a x_3.",
          "\\boxed{y_1^2+y_2^2+y_3^2}."
        ],
        "guide": {
          "concept": "二次型先写对称矩阵，交叉项 2aᵢⱼxᵢxⱼ 对应矩阵中的 aᵢⱼ，而不是2aᵢⱼ。",
          "method": "配方法用于一般可逆线性变换；实对称矩阵正交对角化用特征值和单位正交特征向量；正定性可用顺序主子式。",
          "pitfall": "标准形系数与特征值只在正交变换下直接对应；规范形只保留正负号和零。",
          "extension": "相邻考法包括合同、惯性指数和矩阵正定性。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648638",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=8",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2018-23",
        "year": 2018,
        "number": 23,
        "kind": "解答题",
        "subject": "线性代数",
        "topic": "向量组与线性相关",
        "question": "已知 \\(a\\) 是常数，且矩阵\n\\[\\boldsymbol A=\n\\begin{pmatrix}\n1&2&a\\\\\n1&3&0\\\\\n2&7&-a\n\\end{pmatrix}\n\\]\n可经初等列变换化为矩阵\n\\[\\boldsymbol B=\n\\begin{pmatrix}\n1&a&2\\\\\n0&1&1\\\\\n-1&1&1\n\\end{pmatrix}.\n\\]\n（1）求 \\(a\\)；\n（2）求满足 \\(\\boldsymbol A\\boldsymbol P=\\boldsymbol B\\) 的可逆矩阵 \\(\\boldsymbol P\\)。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "r(\\boldsymbol A)=r(\\boldsymbol B).",
          "\\boldsymbol A\\sim\n\\begin{pmatrix}\n1&2&a\\\\\n0&1&-a\\\\\n0&0&0\n\\end{pmatrix},\n\\qquad\n\\boldsymbol B\\sim\n\\begin{pmatrix}\n1&a&2\\\\\n0&1&1\\\\\n0&0&2-a\n\\end{pmatrix}.",
          "2-a=0",
          "a=2.",
          "a=2",
          "\\boldsymbol A\\boldsymbol X=\\boldsymbol B",
          "\\boldsymbol X=\n\\begin{pmatrix}\n-6k_1+3&-6k_2+4&-6k_3+4\\\\\n2k_1-1&2k_2-1&2k_3-1\\\\\nk_1&k_2&k_3\n\\end{pmatrix}.",
          "|\\boldsymbol X|=k_3-k_2."
        ],
        "guide": {
          "concept": "线性相关的本质是能否找到不全为0的系数组合成零向量；秩等于最大线性无关组所含向量数。",
          "method": "把向量按列组成矩阵并做行化简；主元列给出最大无关组；自由变量对应齐次方程基础解系。",
          "pitfall": "不要把行化简后的列直接当成原向量组的最大无关组；选列应回到原矩阵对应位置。",
          "extension": "相邻考法包括线性表示、秩不等式和解空间维数。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648638",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=8",
        "videoExtraUrl": ""
      }
    ]
  },
  {
    "year": 2019,
    "videoPage": 11,
    "items": [
      {
        "id": "math2-2019-1",
        "year": 2019,
        "number": 1,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "等价无穷小与泰勒展开",
        "question": "当 \\(x\\to 0\\) 时，若 \\(x-\\tan x\\) 与 \\(x^{k}\\) 为同阶无穷小量，则 \\(k=\\)\nA. \\(1\\)\nB. \\(2\\)\nC. \\(3\\)\nD. \\(4\\)",
        "answer": "C",
        "keyFormulas": [
          "\\tan x=x+\\frac{x^3}{3}+o(x^3)",
          "x-\\tan x\\sim-\\frac{x^3}{3}.",
          "x-\\tan x",
          "x^3",
          "k=3"
        ],
        "guide": {
          "concept": "先看每一项在趋近点附近的最低非零次幂。老师在视频里强调：比较阶数时系数通常不重要，但正负号、幂次和趋近条件绝不能口算带过。",
          "method": "把根式、对数、指数、三角函数逐个换成标准等价式；若相减造成低阶项抵消，就立即改用泰勒展开，写到第一个不为零的项。最后只比较幂指数。",
          "pitfall": "最容易把 1-cos x 与 cos x-1 的符号写反，或在加减结构中违规直接做等价替换。先确认替换对象整体趋于0。",
          "extension": "同一知识点还会考极限值、无穷小阶数排序、参数确定和泰勒系数。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648175",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=11",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2019-2",
        "year": 2019,
        "number": 2,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "常微分方程",
        "question": "函数 \\(y=x\\sin x+2\\cos x\\left(0<x<2\\pi\\right)\\) 的拐点为\nA. \\(\\left(\\frac{\\pi}{2},\\frac{\\pi}{2}\\right)\\)\nB. \\(\\left(0,2\\right)\\)\nC. \\(\\left(\\pi,-2\\right)\\)\nD. \\(\\left(\\frac{3\\pi}{2},-\\frac{3\\pi}{2}\\right)\\)",
        "answer": "C",
        "keyFormulas": [
          "y'=x\\cos x-\\sin x,\\qquad y''=-x\\sin x.",
          "0<x<2\\pi",
          "y''=0",
          "x=\\pi",
          "y''",
          "\\left(\\pi,\\pi\\sin\\pi+2\\cos\\pi\\right)=(\\pi,-2)."
        ],
        "guide": {
          "concept": "先识别类型：可分离、一阶线性、伯努利、可降阶或二阶常系数。类型判断比直接试算更重要。",
          "method": "齐次部分先解特征方程；非齐次项按形式设特解，若与齐次解共振就乘 x 的适当次幂；最后用初值确定常数。",
          "pitfall": "设特解时多项式次数、指数因子和三角组合都要保留；共振次数漏乘 x 是高频错误。",
          "extension": "相邻考法包括微分方程建模、曲线族和积分方程。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648175",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=11",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2019-3",
        "year": 2019,
        "number": 3,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "一元积分",
        "question": "下列反常积分发散的是\nA. \\(\\int_{0}^{+\\infty}xe^{-x}\\mathrm{d}x\\)\nB. \\(\\int_{0}^{+\\infty}xe^{-x^{2}}\\mathrm{d}x\\)\nC. \\(\\int_{0}^{+\\infty}\\frac{\\arctan x}{1+x^{2}}\\mathrm{d}x\\)\nD. \\(\\int_{0}^{+\\infty}\\frac{x}{1+x^{2}}\\mathrm{d}x\\)",
        "answer": "D",
        "keyFormulas": [
          "\\int_{0}^{+\\infty}\\frac{x}{1+x^{2}}\\mathrm{d}x\n=\\frac12\\ln(1+x^2)\\bigg|_{0}^{+\\infty}=+\\infty."
        ],
        "guide": {
          "concept": "先看结构再选方法：复合函数配导数用换元，乘积中一项求导变简单用分部积分，有理函数先做代数分解。",
          "method": "写出换元变量与新上下限；反常积分先把瑕点或无穷端点改写成极限；变上限积分先用微积分基本定理求导。",
          "pitfall": "不定积分别漏常数C；分段函数的原函数在分段点还必须连续；反常积分算出原函数不等于已经收敛，必须看极限。",
          "extension": "相邻考法包括积分比较、面积体积、积分不等式和含参积分。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648175",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=11",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2019-4",
        "year": 2019,
        "number": 4,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "常微分方程",
        "question": "微分方程 \\(y''+ay'+by=ce^{x}\\) 的通解为\n\\[y=\\left(C_{1}+C_{2}x\\right)e^{-x}+e^{x},\n\\]\n则 \\(a,b,c\\) 的值为\nA. \\(1,0,1\\)\nB. \\(1,0,2\\)\nC. \\(2,1,3\\)\nD. \\(2,1,4\\)",
        "answer": "D",
        "keyFormulas": [
          "\\lambda=-1",
          "\\lambda^2+a\\lambda+b=(\\lambda+1)^2,",
          "a=2,b=1",
          "y=e^x",
          "y''+2y'+y=ce^x,",
          "4e^x=ce^x",
          "c=4"
        ],
        "guide": {
          "concept": "先识别类型：可分离、一阶线性、伯努利、可降阶或二阶常系数。类型判断比直接试算更重要。",
          "method": "齐次部分先解特征方程；非齐次项按形式设特解，若与齐次解共振就乘 x 的适当次幂；最后用初值确定常数。",
          "pitfall": "设特解时多项式次数、指数因子和三角组合都要保留；共振次数漏乘 x 是高频错误。",
          "extension": "相邻考法包括微分方程建模、曲线族和积分方程。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648175",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=11",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2019-5",
        "year": 2019,
        "number": 5,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "二重积分与区域变换",
        "question": "已知积分区域\n\\[D=\\left\\{(x,y)\\mid |x|+|y|\\le \\frac{\\pi}{2}\\right\\},\n\\]\n且\n\\[I_{1}=\\iint_{D}\\sqrt{x^{2}+y^{2}}\\,\\mathrm{d}x\\mathrm{d}y,\n\\]\n\\[I_{2}=\\iint_{D}\\sin\\sqrt{x^{2}+y^{2}}\\,\\mathrm{d}x\\mathrm{d}y,\n\\]\n\\[I_{3}=\\iint_{D}\\left(1-\\cos\\sqrt{x^{2}+y^{2}}\\right)\\mathrm{d}x\\mathrm{d}y,\n\\]\n则大小关系为\nA. \\(I_{3}<I_{2}<I_{1}\\)\nB. \\(I_{1}<I_{2}<I_{3}\\)\nC. \\(I_{2}<I_{1}<I_{3}\\)\nD. \\(I_{2}<I_{3}<I_{1}\\)",
        "answer": "A",
        "keyFormulas": [
          "0<r\\le \\frac{\\pi}{2}",
          "1-\\cos r<\\sin r<r.",
          "r=\\sqrt{x^2+y^2}",
          "I_3<I_2<I_1."
        ],
        "guide": {
          "concept": "二重积分先画区域。很多计算错误不是积分不会，而是上下限描述了错误的区域。",
          "method": "标出边界交点；选择先 x 后 y 或先 y 后 x；圆、扇形和只含 x²+y² 的结构优先考虑极坐标，并补上雅可比 r。",
          "pitfall": "交换积分次序必须重新写全部上下限；利用对称性前先检查区域和被积函数奇偶性。",
          "extension": "相邻考法包括体积、质心、变换积分次序和参数区域。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648175",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=11",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2019-6",
        "year": 2019,
        "number": 6,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "极限计算",
        "question": "已知 \\(f(x),g(x)\\) 二阶可导且在 \\(x=a\\) 处连续，则 \\(f(x),g(x)\\) 相切于 \\(a\\) 且曲率相等是\n\\[\\lim_{x\\to a}\\frac{f(x)-g(x)}{(x-a)^2}=0\n\\]\n的\nA. 充分非必要条件\nB. 充分必要条件\nC. 必要非充分条件\nD. 既非充分又非必要条件",
        "answer": "A",
        "keyFormulas": [
          "f(a)=g(a),\\qquad f'(a)=g'(a),\\qquad f''(a)=g''(a),"
        ],
        "guide": {
          "concept": "极限题的关键不是一上来求导，而是先判断未定式类型，再选择等价无穷小、洛必达、泰勒、夹逼、单调有界或定积分定义。",
          "method": "第一行写清趋近方向和分子分母的量级；第二行处理主导项；第三行再约分或求导。遇到和式先试定积分定义，遇到递推先找单调性与界。",
          "pitfall": "连续使用洛必达会掩盖结构，也容易在不满足条件时误用。含绝对值、单侧极限和参数时必须分别检查。",
          "extension": "可联动复习无穷小比较、数列极限、函数极限和含参极限。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648175",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=11",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2019-7",
        "year": 2019,
        "number": 7,
        "kind": "单项选择题",
        "subject": "线性代数",
        "topic": "线性方程组",
        "question": "设 \\(\\boldsymbol{A}\\) 是四阶矩阵，\\(\\boldsymbol{A}^{*}\\) 是 \\(\\boldsymbol{A}\\) 的伴随矩阵。若线性方程组\n\\[\\boldsymbol{A}\\boldsymbol{x}=\\boldsymbol{0}\n\\]\n的基础解系中只有 \\(2\\) 个向量，则 \\(\\boldsymbol{A}^{*}\\) 的秩是\nA. \\(0\\)\nB. \\(1\\)\nC. \\(2\\)\nD. \\(3\\)",
        "answer": "A",
        "keyFormulas": [
          "r(\\boldsymbol{A})=4-2=2.",
          "r(\\boldsymbol{A})<n-1=3",
          "r(\\boldsymbol{A}^{*})=0."
        ],
        "guide": {
          "concept": "方程组先比较系数矩阵秩 r(A) 与增广矩阵秩 r(A,b)，再讨论无解、唯一解或无穷多解。",
          "method": "对增广矩阵做初等行变换；确定主元和自由变量；非齐次通解=一个特解+齐次方程通解。",
          "pitfall": "有参数时秩可能分情况变化；不要只看行列式为0就直接断言无解。",
          "extension": "相邻考法包括公共解、同解方程组与矩阵秩。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648175",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=11",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2019-8",
        "year": 2019,
        "number": 8,
        "kind": "单项选择题",
        "subject": "线性代数",
        "topic": "二次型",
        "question": "设 \\(\\boldsymbol{A}\\) 是 \\(3\\) 阶实对称矩阵，\\(\\boldsymbol{E}\\) 是 \\(3\\) 阶单位矩阵。若\n\\[\\boldsymbol{A}^{2}+\\boldsymbol{A}=2\\boldsymbol{E},\\qquad |\\boldsymbol{A}|=4,\n\\]\n则二次型 \\(\\boldsymbol{X}^{T}\\boldsymbol{A}\\boldsymbol{X}\\) 的规范形为\nA. \\(y_{1}^{2}+y_{2}^{2}+y_{3}^{2}\\)\nB. \\(y_{1}^{2}+y_{2}^{2}-y_{3}^{2}\\)\nC. \\(y_{1}^{2}-y_{2}^{2}-y_{3}^{2}\\)\nD. \\(-y_{1}^{2}-y_{2}^{2}-y_{3}^{2}\\)",
        "answer": "C",
        "keyFormulas": [
          "\\lambda^2+\\lambda=2,",
          "\\lambda=1",
          "\\lambda=-2",
          "|\\boldsymbol{A}|=4",
          "1,-2,-2.",
          "1,2",
          "y_1^2-y_2^2-y_3^2."
        ],
        "guide": {
          "concept": "二次型先写对称矩阵，交叉项 2aᵢⱼxᵢxⱼ 对应矩阵中的 aᵢⱼ，而不是2aᵢⱼ。",
          "method": "配方法用于一般可逆线性变换；实对称矩阵正交对角化用特征值和单位正交特征向量；正定性可用顺序主子式。",
          "pitfall": "标准形系数与特征值只在正交变换下直接对应；规范形只保留正负号和零。",
          "extension": "相邻考法包括合同、惯性指数和矩阵正定性。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648175",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=11",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2019-9",
        "year": 2019,
        "number": 9,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "极限计算",
        "question": "\\[\\lim_{x\\to 0}\\left(x+2^{x}\\right)^{\\frac{2}{x}}=\n\\]",
        "answer": "\\(4e^{2}\\)",
        "keyFormulas": [
          "\\lim_{x\\to0}\\left(x+2^x\\right)^{2/x}\n=\\exp\\left(\\lim_{x\\to0}\\frac{2\\ln(x+2^x)}{x}\\right).",
          "2^x=e^{x\\ln2}",
          "2(1+\\ln2)",
          "e^{2(1+\\ln2)}=4e^2."
        ],
        "guide": {
          "concept": "极限题的关键不是一上来求导，而是先判断未定式类型，再选择等价无穷小、洛必达、泰勒、夹逼、单调有界或定积分定义。",
          "method": "第一行写清趋近方向和分子分母的量级；第二行处理主导项；第三行再约分或求导。遇到和式先试定积分定义，遇到递推先找单调性与界。",
          "pitfall": "连续使用洛必达会掩盖结构，也容易在不满足条件时误用。含绝对值、单侧极限和参数时必须分别检查。",
          "extension": "可联动复习无穷小比较、数列极限、函数极限和含参极限。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648175",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=11",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2019-10",
        "year": 2019,
        "number": 10,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "综合应用",
        "question": "曲线\n\\[\\begin{cases}\nx=t-\\sin t,\\\\\ny=1-\\cos t\n\\end{cases}\n\\]\n在对应点 \\(t=\\frac{3\\pi}{2}\\) 处切线在轴上的截距为",
        "answer": "\\(\\frac{3\\pi}{2}+2\\)",
        "keyFormulas": [
          "t=\\frac{3\\pi}{2}",
          "x=\\frac{3\\pi}{2}+1,\\qquad y=1,\\qquad\n\\frac{\\mathrm{d}y}{\\mathrm{d}x}=\\frac{\\sin t}{1-\\cos t}=-1.",
          "y=-x+\\frac{3\\pi}{2}+2.",
          "\\frac{3\\pi}{2}+2"
        ],
        "guide": {
          "concept": "先判断题目属于高等数学还是线性代数，并把题干中的已知条件、所求对象和限制范围分别圈出。",
          "method": "选择最直接的定义或定理，先写公式，再代条件，保留关键中间步骤，最后用答案反查题意。",
          "pitfall": "不要在读题未完成时开始心算；符号、定义域、单侧条件和矩阵乘法顺序都是高频失分点。",
          "extension": "做完后把本题归入对应专题，再找一道同方法不同外观的题复做。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648175",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=11",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2019-11",
        "year": 2019,
        "number": 11,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "导数定义与高阶导数",
        "question": "设函数 \\(f(u)\\) 可导，\\(z=yf\\left(\\frac{y^{2}}{x}\\right)\\)，则\n\\[2x\\frac{\\partial z}{\\partial x}+y\\frac{\\partial z}{\\partial y}=\n\\]",
        "answer": "\\(z\\)",
        "keyFormulas": [
          "u=\\frac{y^2}{x}",
          "z_x=yf'(u)\\left(-\\frac{y^2}{x^2}\\right),\\qquad\nz_y=f(u)+\\frac{2y^2}{x}f'(u).",
          "2xz_x+yz_y=yf(u)=z."
        ],
        "guide": {
          "concept": "导数是局部变化率。分段点、绝对值点和题目指定点，优先回到导数定义，而不是机械套求导公式。",
          "method": "先求函数值，再写差商；左右分别化简并取极限。高阶导数题先观察幂级数或通项结构，避免重复求导。参数方程用 dy/dx=(dy/dt)/(dx/dt)。",
          "pitfall": "二阶参数导数还要再除一次 dx/dt；不要把对 t 求导直接当成对 x 求导。",
          "extension": "可联动切线法线、相关变化率、隐函数求导和曲率。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648175",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=11",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2019-12",
        "year": 2019,
        "number": 12,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "定积分的几何与物理应用",
        "question": "函数 \\(y=\\ln\\cos x\\left(0\\le x\\le \\frac{\\pi}{6}\\right)\\) 的弧长为",
        "answer": "\\(\\frac{1}{2}\\ln 3\\)",
        "keyFormulas": [
          "y'=-\\tan x",
          "L=\\int_0^{\\pi/6}\\sqrt{1+\\tan^2x}\\,\\mathrm{d}x\n=\\int_0^{\\pi/6}\\sec x\\,\\mathrm{d}x.",
          "L=\\ln|\\sec x+\\tan x|\\bigg|_0^{\\pi/6}\n=\\frac12\\ln3."
        ],
        "guide": {
          "concept": "先把几何量写成微元：面积、体积、弧长、压力或功，再决定沿哪个变量累加。",
          "method": "画图并标出典型小条；写微元公式；确定积分区间；最后检查结果量纲和正负。旋转体要先确认绕哪条轴。",
          "pitfall": "把半径、直径和到旋转轴的距离混淆，会让结果成倍出错；物理题还要统一单位。",
          "extension": "相邻考法包括相关变化率、最值和二重积分应用。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648175",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=11",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2019-13",
        "year": 2019,
        "number": 13,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "一元积分",
        "question": "已知函数\n\\[f(x)=x\\int_1^x\\frac{\\sin t^2}{t}\\,\\mathrm{d}t,\n\\]\n则\n\\[\\int_0^1f(x)\\,\\mathrm{d}x=\n\\]",
        "answer": "\\(\\frac{1}{4}(\\cos 1-1)\\)",
        "keyFormulas": [
          "\\int_0^1x\\int_1^x\\frac{\\sin t^2}{t}\\,\\mathrm{d}t\\,\\mathrm{d}x\n=-\\int_0^1\\frac{\\sin t^2}{t}\\int_0^t x\\,\\mathrm{d}x\\,\\mathrm{d}t.",
          "=-\\frac12\\int_0^1t\\sin t^2\\,\\mathrm{d}t\n=\\frac14(\\cos1-1)."
        ],
        "guide": {
          "concept": "先看结构再选方法：复合函数配导数用换元，乘积中一项求导变简单用分部积分，有理函数先做代数分解。",
          "method": "写出换元变量与新上下限；反常积分先把瑕点或无穷端点改写成极限；变上限积分先用微积分基本定理求导。",
          "pitfall": "不定积分别漏常数C；分段函数的原函数在分段点还必须连续；反常积分算出原函数不等于已经收敛，必须看极限。",
          "extension": "相邻考法包括积分比较、面积体积、积分不等式和含参积分。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648175",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=11",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2019-14",
        "year": 2019,
        "number": 14,
        "kind": "填空题",
        "subject": "线性代数",
        "topic": "行列式与矩阵运算",
        "question": "已知矩阵\n\\[\\boldsymbol{A}=\n\\begin{pmatrix}\n1&-1&0&0\\\\\n-2&1&-1&1\\\\\n3&-2&2&-1\\\\\n0&0&3&4\n\\end{pmatrix},\n\\]\n\\(A_{ij}\\) 表示 \\(\\boldsymbol{A}\\) 中 \\((i,j)\\) 元的代数余子式，则\n\\[A_{11}-A_{12}=\n\\]",
        "answer": "\\(-4\\)",
        "keyFormulas": [
          "A_{11}-A_{12}=|\\boldsymbol{A}|=-4."
        ],
        "guide": {
          "concept": "矩阵题先看题目要求的是数值、秩、可逆性还是结构关系。矩阵乘法不能交换顺序。",
          "method": "优先使用初等变换、分块、A·A* = |A|E、可逆矩阵保持秩等性质，避免无目的展开。",
          "pitfall": "行变换与列变换对行列式的影响不同；矩阵等式中左右乘同一矩阵也要保持位置。",
          "extension": "相邻考法包括秩、方程组、特征值和相似。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648175",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=11",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2019-15",
        "year": 2019,
        "number": 15,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "单调性、极值与凹凸性",
        "question": "已知\n\\[f(x)=\n\\begin{cases}\nx^{2x}, & x>0,\\\\\nxe^x+1, & x\\le 0,\n\\end{cases}\n\\]\n求 \\(f(x)\\) 的极值。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "x>0",
          "f'(x)=x^{2x}(2\\ln x+2).",
          "x<0",
          "f'(x)=(1+x)e^x.",
          "x=0",
          "f'(x)=0",
          "x=-1,\\qquad x=\\frac1e.",
          "(-\\infty,-1)"
        ],
        "guide": {
          "concept": "极值看一阶导数变号，拐点看凹凸性改变。老师反复提醒：题目给的是函数图还是导函数图，必须先读清。",
          "method": "求定义域；求一阶导数并列符号表；极值再检查端点。拐点用二阶导数变号验证，不能只凭 f''(x)=0。",
          "pitfall": "驻点不一定是极值点，二阶导数为0也不一定是拐点。最值题不要漏掉区间端点。",
          "extension": "相邻考法包括不等式证明、最优化、切线截距和函数作图。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648175",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=11",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2019-16",
        "year": 2019,
        "number": 16,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "一元积分",
        "question": "求不定积分\n\\[\\int\\frac{3x+6}{(x-1)^2(x^2+x+1)}\\,\\mathrm{d}x.\n\\]",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "\\frac{3x+6}{(x-1)^2(x^2+x+1)}\n=\n\\frac{2x+1}{x^2+x+1}\n+\\frac{3}{(x-1)^2}\n-\\frac{2}{x-1}.",
          "\\int\\frac{3x+6}{(x-1)^2(x^2+x+1)}\\,\\mathrm{d}x\n=\n\\ln(x^2+x+1)-\\frac{3}{x-1}-2\\ln|x-1|+C."
        ],
        "guide": {
          "concept": "先看结构再选方法：复合函数配导数用换元，乘积中一项求导变简单用分部积分，有理函数先做代数分解。",
          "method": "写出换元变量与新上下限；反常积分先把瑕点或无穷端点改写成极限；变上限积分先用微积分基本定理求导。",
          "pitfall": "不定积分别漏常数C；分段函数的原函数在分段点还必须连续；反常积分算出原函数不等于已经收敛，必须看极限。",
          "extension": "相邻考法包括积分比较、面积体积、积分不等式和含参积分。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648175",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=11",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2019-17",
        "year": 2019,
        "number": 17,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "常微分方程",
        "question": "\\(y=y(x)\\) 是微分方程\n\\[y'-xy=\\frac{1}{2\\sqrt{x}}e^{x^2/2}\n\\]\n满足 \\(y(1)=\\sqrt e\\) 的特解。\n（1）求 \\(y=y(x)\\)；\n（2）\\(D=\\{(x,y)\\mid 1\\le x\\le2,\\ 0\\le y\\le y(x)\\}\\)，求平面区域 \\(D\\) 绕 \\(x\\) 轴旋转成的旋转体体积。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "y=e^{x^2/2}\\left(\\int \\frac{1}{2\\sqrt{x}}\\,\\mathrm{d}x+C\\right)\n=e^{x^2/2}(\\sqrt{x}+C).",
          "y(1)=\\sqrt e",
          "C=0",
          "y=\\sqrt{x}\\,e^{x^2/2}.",
          "V=\\pi\\int_1^2 y^2\\,\\mathrm{d}x\n=\\pi\\int_1^2 xe^{x^2}\\,\\mathrm{d}x.",
          "V=\\frac{\\pi}{2}e^{x^2}\\bigg|_1^2\n=\\frac{\\pi}{2}(e^4-e)."
        ],
        "guide": {
          "concept": "先识别类型：可分离、一阶线性、伯努利、可降阶或二阶常系数。类型判断比直接试算更重要。",
          "method": "齐次部分先解特征方程；非齐次项按形式设特解，若与齐次解共振就乘 x 的适当次幂；最后用初值确定常数。",
          "pitfall": "设特解时多项式次数、指数因子和三角组合都要保留；共振次数漏乘 x 是高频错误。",
          "extension": "相邻考法包括微分方程建模、曲线族和积分方程。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648175",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=11",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2019-18",
        "year": 2019,
        "number": 18,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "二重积分与区域变换",
        "question": "已知平面区域 \\(D\\) 满足\n\\[|x|\\le y,\\qquad (x^2+y^2)^3\\le y^4,\n\\]\n求\n\\[\\iint_D\\frac{x+y}{\\sqrt{x^2+y^2}}\\,\\mathrm{d}x\\mathrm{d}y.\n\\]",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "x=r\\cos\\theta,\\ y=r\\sin\\theta",
          "\\frac{\\pi}{4}\\le\\theta\\le\\frac{3\\pi}{4},\\qquad 0\\le r\\le \\sin^2\\theta.",
          "I=\\int_{\\pi/4}^{3\\pi/4}\\int_0^{\\sin^2\\theta}\n\\sin\\theta\\cdot r\\,\\mathrm{d}r\\mathrm{d}\\theta\n=\\frac12\\int_{\\pi/4}^{3\\pi/4}\\sin^5\\theta\\,\\mathrm{d}\\theta.",
          "u=\\cos\\theta",
          "I=\\frac{43\\sqrt2}{120}."
        ],
        "guide": {
          "concept": "二重积分先画区域。很多计算错误不是积分不会，而是上下限描述了错误的区域。",
          "method": "标出边界交点；选择先 x 后 y 或先 y 后 x；圆、扇形和只含 x²+y² 的结构优先考虑极坐标，并补上雅可比 r。",
          "pitfall": "交换积分次序必须重新写全部上下限；利用对称性前先检查区域和被积函数奇偶性。",
          "extension": "相邻考法包括体积、质心、变换积分次序和参数区域。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648175",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=11",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2019-19",
        "year": 2019,
        "number": 19,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "定积分的几何与物理应用",
        "question": "设 \\(n\\) 为正整数，记 \\(S_n\\) 为曲线\n\\[y=e^{-x}\\sin x\\qquad (0\\le x\\le n\\pi)\n\\]\n与 \\(x\\) 轴之间图形的面积。求 \\(S_n\\)，并求 \\(\\lim_{n\\to\\infty}S_n\\)。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "S_n=\\int_0^{n\\pi}e^{-x}|\\sin x|\\,\\mathrm{d}x\n=\\sum_{k=0}^{n-1}\\int_{k\\pi}^{(k+1)\\pi}e^{-x}|\\sin x|\\,\\mathrm{d}x.",
          "\\int_{k\\pi}^{(k+1)\\pi}e^{-x}|\\sin x|\\,\\mathrm{d}x\n=\\frac{1+e^{-\\pi}}{2}e^{-k\\pi}.",
          "S_n=\\frac{1+e^{-\\pi}}{2}\\cdot\\frac{1-e^{-n\\pi}}{1-e^{-\\pi}}.",
          "\\lim_{n\\to\\infty}S_n\n=\n\\frac{1+e^{-\\pi}}{2(1-e^{-\\pi})}."
        ],
        "guide": {
          "concept": "先把几何量写成微元：面积、体积、弧长、压力或功，再决定沿哪个变量累加。",
          "method": "画图并标出典型小条；写微元公式；确定积分区间；最后检查结果量纲和正负。旋转体要先确认绕哪条轴。",
          "pitfall": "把半径、直径和到旋转轴的距离混淆，会让结果成倍出错；物理题还要统一单位。",
          "extension": "相邻考法包括相关变化率、最值和二重积分应用。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648175",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=11",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2019-20",
        "year": 2019,
        "number": 20,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "多元函数微分",
        "question": "已知函数 \\(u(x,y)\\) 满足\n\\[2\\frac{\\partial^{2}u}{\\partial x^{2}}\n-2\\frac{\\partial^{2}u}{\\partial y^{2}}\n+3\\frac{\\partial u}{\\partial x}\n+3\\frac{\\partial u}{\\partial y}=0.\n\\]\n求 \\(a,b\\) 的值，使得在变换\n\\[u(x,y)=v(x,y)e^{ax+by}\n\\]\n下，上述等式可化为函数 \\(v(x,y)\\) 的不含一阶偏导的等式。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "u=v e^{ax+by}",
          "4a+3,\\qquad -4b+3.",
          "4a+3=0,\\qquad -4b+3=0.",
          "a=-\\frac34,\\qquad b=\\frac34."
        ],
        "guide": {
          "concept": "多元题先区分偏导数、方向导数、全微分和复合函数链式法则。偏导存在不自动推出连续或可微。",
          "method": "画依赖关系：外层变量对中间变量求偏导，中间变量再对自变量求导；每条路径的乘积相加。指定点最后再代入。",
          "pitfall": "二阶混合偏导只有在相应连续条件下才能随意交换次序；沿坐标轴极限不能代替二元极限。",
          "extension": "相邻考法包括极值、条件极值、切平面与法线。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648175",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=11",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2019-21",
        "year": 2019,
        "number": 21,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "中值定理与零点证明",
        "question": "已知函数 \\(f(x)\\) 在 \\([0,1]\\) 上具有二阶导数，且\n\\[f(0)=0,\\qquad f(1)=1,\\qquad \\int_0^1f(x)\\,\\mathrm{d}x=1.\n\\]\n证明：\n（1）存在 \\(\\xi\\in(0,1)\\)，使得 \\(f'(\\xi)=0\\)；\n（2）存在 \\(\\eta\\in(0,1)\\)，使得 \\(f''(\\eta)<-2\\)。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "a\\in(0,1)",
          "f(a)=\\int_0^1f(x)\\,\\mathrm{d}x=1.",
          "f(a)=f(1)=1",
          "\\xi\\in(a,1)\\subset(0,1)",
          "f'(\\xi)=0.",
          "x_0\\in(0,1)",
          "f(x)",
          "\\int_0^1f(x)\\,\\mathrm{d}x=1"
        ],
        "guide": {
          "concept": "存在性证明的核心是‘构造谁、在哪个区间用哪个定理’。目标式通常提示辅助函数的导数形式。",
          "method": "先用连续性和端点异号找零点；再根据目标式反推辅助函数。罗尔定理要逐项核对闭区间连续、开区间可导、端点函数值相等。",
          "pitfall": "只写‘由罗尔定理可得’但不说明区间与条件会丢步骤分；多个根要使用互不重叠的区间。",
          "extension": "常与积分中值定理、柯西中值定理、零点个数和不等式结合。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648175",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=11",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2019-22",
        "year": 2019,
        "number": 22,
        "kind": "解答题",
        "subject": "线性代数",
        "topic": "向量组与线性相关",
        "question": "已知向量组\n\\[\\text{(I)}\\quad\n\\boldsymbol{\\alpha}_{1}=\n\\begin{pmatrix}1\\\\1\\\\4\\end{pmatrix},\n\\quad\n\\boldsymbol{\\alpha}_{2}=\n\\begin{pmatrix}1\\\\0\\\\4\\end{pmatrix},\n\\quad\n\\boldsymbol{\\alpha}_{3}=\n\\begin{pmatrix}1\\\\2\\\\a^{2}+3\\end{pmatrix},\n\\]\n\\[\\text{(II)}\\quad\n\\boldsymbol{\\beta}_{1}=\n\\begin{pmatrix}1\\\\1\\\\a+3\\end{pmatrix},\n\\quad\n\\boldsymbol{\\beta}_{2}=\n\\begin{pmatrix}0\\\\2\\\\1-a\\end{pmatrix},\n\\quad\n\\boldsymbol{\\beta}_{3}=\n\\begin{pmatrix}1\\\\3\\\\a^{2}+3\\end{pmatrix}.\n\\]\n若向量组（I）和向量组（II）等价，求 \\(a\\) 的取值，并将 \\(\\boldsymbol{\\beta}_{3}\\) 用 \\(\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3}\\) 线性表示。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "(\\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_3,\n\\boldsymbol{\\beta}_1,\\boldsymbol{\\beta}_2,\\boldsymbol{\\beta}_3)",
          "\\begin{pmatrix}\n1&1&1&1&0&1\\\\\n0&-1&1&0&2&2\\\\\n0&0&a^2-1&a-1&1-a&a^2-1\n\\end{pmatrix}.",
          "a=-1",
          "a\\ne -1.",
          "a=1",
          "\\boldsymbol{\\beta}_3\n=(3-2k)\\boldsymbol{\\alpha}_1+(-2+k)\\boldsymbol{\\alpha}_2+k\\boldsymbol{\\alpha}_3,\n\\qquad k\\in\\mathbb{R}.",
          "a\\ne \\pm1",
          "\\boldsymbol{\\beta}_3\n=\\boldsymbol{\\alpha}_1-\\boldsymbol{\\alpha}_2+\\boldsymbol{\\alpha}_3."
        ],
        "guide": {
          "concept": "线性相关的本质是能否找到不全为0的系数组合成零向量；秩等于最大线性无关组所含向量数。",
          "method": "把向量按列组成矩阵并做行化简；主元列给出最大无关组；自由变量对应齐次方程基础解系。",
          "pitfall": "不要把行化简后的列直接当成原向量组的最大无关组；选列应回到原矩阵对应位置。",
          "extension": "相邻考法包括线性表示、秩不等式和解空间维数。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648175",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=11",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2019-23",
        "year": 2019,
        "number": 23,
        "kind": "解答题",
        "subject": "线性代数",
        "topic": "特征值、特征向量与相似",
        "question": "已知矩阵\n\\[\\boldsymbol{A}=\n\\begin{pmatrix}\n-2&-2&1\\\\\n2&x&-2\\\\\n0&0&-2\n\\end{pmatrix},\n\\qquad\n\\boldsymbol{B}=\n\\begin{pmatrix}\n2&1&0\\\\\n0&-1&0\\\\\n0&0&y\n\\end{pmatrix}\n\\]\n相似。\n（1）求 \\(x,y\\)；\n（2）求可逆矩阵 \\(\\boldsymbol{P}\\)，使得\n\\[\\boldsymbol{P}^{-1}\\boldsymbol{A}\\boldsymbol{P}=\\boldsymbol{B}.\n\\]",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "\\boldsymbol{A}\\sim\\boldsymbol{B}",
          "|\\lambda\\boldsymbol{E}-\\boldsymbol{A}|\n=(\\lambda+2)\\left[(\\lambda+2)(\\lambda-x)+4\\right],",
          "y=-2,\\qquad x=3.",
          "x=3,y=-2",
          "\\boldsymbol{P}\n=\n\\begin{pmatrix}\n-1&-1&-1\\\\\n2&1&2\\\\\n0&0&4\n\\end{pmatrix}.",
          "\\boldsymbol{P}^{-1}\\boldsymbol{A}\\boldsymbol{P}\n=\n\\begin{pmatrix}\n2&1&0\\\\\n0&-1&0\\\\\n0&0&-2\n\\end{pmatrix}\n=\\boldsymbol{B}.",
          "\\boldsymbol{P}"
        ],
        "guide": {
          "concept": "先用特征方程找特征值，再解 (A-λE)x=0。能否对角化取决于线性无关特征向量是否足够。",
          "method": "利用迹、行列式和已知特征向量简化；分别求每个特征值的特征子空间维数；按列组成 P，并保持特征值顺序一致。",
          "pitfall": "重特征值不等于一定不能对角化；相似矩阵特征值相同，但反过来不一定相似。",
          "extension": "相邻考法包括矩阵幂、二次型正交变换和实对称矩阵。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648175",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=11",
        "videoExtraUrl": ""
      }
    ]
  },
  {
    "year": 2020,
    "videoPage": 14,
    "items": [
      {
        "id": "math2-2020-1",
        "year": 2020,
        "number": 1,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "等价无穷小与泰勒展开",
        "question": "当 \\(x \\to 0^{+}\\) 时，下列无穷小量中阶最高的是\n(A) \\(\\int_{0}^{x}{\\left( e^{t^{2}} - 1 \\right) \\mathrm{~d} t}\\)\n(B) \\(\\int_{0}^{x}{\\ln \\left( 1 + \\sqrt{t^{3}} \\right) \\mathrm{~d} t}\\)\n(C) \\(\\int_{0}^{\\sin x}{\\sin t^{2} \\mathrm{~d} t}\\)\n(D) \\(\\int_{0}^{1-\\cos x}{\\sqrt{\\sin^{3} t} \\mathrm{~d} t}\\)",
        "answer": "D",
        "keyFormulas": [
          "\\int_0^x (e^{t^2}-1)\\,\\mathrm{d}t \\sim \\int_0^x t^2\\,\\mathrm{d}t = \\dfrac{x^3}{3}",
          "\\int_0^x \\ln(1+t^{3/2})\\,\\mathrm{d}t \\sim \\int_0^x t^{3/2}\\,\\mathrm{d}t = \\dfrac{2}{5}x^{5/2}",
          "\\int_0^{\\sin x}\\sin t^2\\,\\mathrm{d}t \\sim \\int_0^x t^2\\,\\mathrm{d}t = \\dfrac{x^3}{3}",
          "\\int_0^{1-\\cos x}\\sqrt{\\sin^3 t}\\,\\mathrm{d}t \\sim \\int_0^{x^2/2} t^{3/2}\\,\\mathrm{d}t \\asymp x^5"
        ],
        "guide": {
          "concept": "先看每一项在趋近点附近的最低非零次幂。老师在视频里强调：比较阶数时系数通常不重要，但正负号、幂次和趋近条件绝不能口算带过。",
          "method": "把根式、对数、指数、三角函数逐个换成标准等价式；若相减造成低阶项抵消，就立即改用泰勒展开，写到第一个不为零的项。最后只比较幂指数。",
          "pitfall": "最容易把 1-cos x 与 cos x-1 的符号写反，或在加减结构中违规直接做等价替换。先确认替换对象整体趋于0。",
          "extension": "同一知识点还会考极限值、无穷小阶数排序、参数确定和泰勒系数。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648003",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=14",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2020-2",
        "year": 2020,
        "number": 2,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "极限计算",
        "question": "函数 \\(f\\left( x \\right) = \\dfrac{e^{\\frac{1}{x-1}} \\ln \\left| 1+x \\right|}{\\left( e^{x} - 1 \\right)\\left( x-2 \\right)}\\) 的第二类间断点的个数为\n(A) \\(1\\) 个\n(B) \\(2\\) 个\n(C) \\(3\\) 个\n(D) \\(4\\) 个",
        "answer": "C",
        "keyFormulas": [
          "x=-1,0,1,2",
          "x=-1",
          "\\ln|1+x| \\to -\\infty",
          "x=0",
          "\\displaystyle \\lim_{x\\to0}\\frac{e^{1/(x-1)}\\ln(1+x)}{(e^x-1)(x-2)}=-\\frac1{2e}",
          "x=1",
          "e^{1/(x-1)}",
          "x=2"
        ],
        "guide": {
          "concept": "极限题的关键不是一上来求导，而是先判断未定式类型，再选择等价无穷小、洛必达、泰勒、夹逼、单调有界或定积分定义。",
          "method": "第一行写清趋近方向和分子分母的量级；第二行处理主导项；第三行再约分或求导。遇到和式先试定积分定义，遇到递推先找单调性与界。",
          "pitfall": "连续使用洛必达会掩盖结构，也容易在不满足条件时误用。含绝对值、单侧极限和参数时必须分别检查。",
          "extension": "可联动复习无穷小比较、数列极限、函数极限和含参极限。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648003",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=14",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2020-3",
        "year": 2020,
        "number": 3,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "综合应用",
        "question": "\\(\\int_{0}^{1}{\\dfrac{\\arcsin \\sqrt{x}}{\\sqrt{x\\left( 1-x \\right)}} \\mathrm{~d} x} =\\)\n(A) \\(\\dfrac{\\pi^{2}}{4}\\)\n(B) \\(\\dfrac{\\pi^{2}}{8}\\)\n(C) \\(\\dfrac{\\pi}{4}\\)\n(D) \\(\\dfrac{\\pi}{8}\\)",
        "answer": "A",
        "keyFormulas": [
          "u=\\arcsin\\sqrt{x}",
          "\\mathrm{d}u=\\dfrac{1}{2\\sqrt{x(1-x)}}\\,\\mathrm{d}x",
          "2\\int_0^1 \\arcsin\\sqrt{x}\\,\\mathrm{d}(\\arcsin\\sqrt{x})\n=\\left.(\\arcsin\\sqrt{x})^2\\right|_0^1\n=\\left(\\frac{\\pi}{2}\\right)^2\n=\\frac{\\pi^2}{4}."
        ],
        "guide": {
          "concept": "先判断题目属于高等数学还是线性代数，并把题干中的已知条件、所求对象和限制范围分别圈出。",
          "method": "选择最直接的定义或定理，先写公式，再代条件，保留关键中间步骤，最后用答案反查题意。",
          "pitfall": "不要在读题未完成时开始心算；符号、定义域、单侧条件和矩阵乘法顺序都是高频失分点。",
          "extension": "做完后把本题归入对应专题，再找一道同方法不同外观的题复做。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648003",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=14",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2020-4",
        "year": 2020,
        "number": 4,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "导数定义与高阶导数",
        "question": "已知函数 \\(f\\left( x \\right) = x^{2} \\ln \\left( 1-x \\right)\\)，当 \\(n \\geq 3\\) 时，\\(f^{\\left( n \\right)}\\left( 0 \\right) =\\)\n(A) \\(-\\dfrac{n!}{n-2}\\)\n(B) \\(\\dfrac{n!}{n-2}\\)\n(C) \\(-\\dfrac{\\left( n-2 \\right)!}{n}\\)\n(D) \\(\\dfrac{\\left( n-2 \\right)!}{n}\\)",
        "answer": "A",
        "keyFormulas": [
          "\\ln(1-x)=-\\left(x+\\frac{x^2}{2}+\\frac{x^3}{3}+\\cdots\\right),",
          "f(x)=x^2\\ln(1-x)\n=-\\left(x^3+\\frac{x^4}{2}+\\cdots+\\frac{x^n}{n-2}+\\cdots\\right).",
          "x^n",
          "-\\dfrac{1}{n-2}",
          "f^{(n)}(0)=n!\\left(-\\frac1{n-2}\\right)=-\\frac{n!}{n-2}\\qquad(n\\ge3)."
        ],
        "guide": {
          "concept": "导数是局部变化率。分段点、绝对值点和题目指定点，优先回到导数定义，而不是机械套求导公式。",
          "method": "先求函数值，再写差商；左右分别化简并取极限。高阶导数题先观察幂级数或通项结构，避免重复求导。参数方程用 dy/dx=(dy/dt)/(dx/dt)。",
          "pitfall": "二阶参数导数还要再除一次 dx/dt；不要把对 t 求导直接当成对 x 求导。",
          "extension": "可联动切线法线、相关变化率、隐函数求导和曲率。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648003",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=14",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2020-5",
        "year": 2020,
        "number": 5,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "多元函数微分",
        "question": "关于函数\n\\[f(x,y)=\n\\begin{cases}\nxy, & xy\\ne 0,\\\\\nx, & y=0,\\\\\ny, & x=0,\n\\end{cases}\n\\]\n给出下列结论：\n\\(\\left.\\dfrac{\\partial f}{\\partial x}\\right|_{(0,0)}=1\\)\n\\(\\left.\\dfrac{\\partial^2 f}{\\partial x\\partial y}\\right|_{(0,0)}=1\\)\n\\(\\lim\\limits_{(x,y)\\to(0,0)}f(x,y)=0\\)\n\\(\\lim\\limits_{y\\to0}\\lim\\limits_{x\\to0}f(x,y)=0\\)\n其中正确的个数为\n(A) \\(4\\)\n(B) \\(3\\)\n(C) \\(2\\)\n(D) \\(1\\)",
        "answer": "B",
        "keyFormulas": [
          "f(x,0)=x",
          "\\displaystyle \\left.\\frac{\\partial f}{\\partial x}\\right|_{(0,0)}=\\lim_{x\\to0}\\frac{x-0}{x}=1",
          "y\\ne0",
          "\\displaystyle \\frac{f(x,y)-f(0,y)}{x}=\\frac{xy-y}{x}",
          "\\left.\\dfrac{\\partial^2f}{\\partial x\\partial y}\\right|_{(0,0)}",
          "xy\\ne0",
          "f(x,y)\\to0",
          "x\\to0"
        ],
        "guide": {
          "concept": "多元题先区分偏导数、方向导数、全微分和复合函数链式法则。偏导存在不自动推出连续或可微。",
          "method": "画依赖关系：外层变量对中间变量求偏导，中间变量再对自变量求导；每条路径的乘积相加。指定点最后再代入。",
          "pitfall": "二阶混合偏导只有在相应连续条件下才能随意交换次序；沿坐标轴极限不能代替二元极限。",
          "extension": "相邻考法包括极值、条件极值、切平面与法线。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648003",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=14",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2020-6",
        "year": 2020,
        "number": 6,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "单调性、极值与凹凸性",
        "question": "设函数 \\(f\\left( x \\right)\\) 在区间 \\(\\left[ -2,2 \\right]\\) 上可导，且 \\(f^{\\prime}\\left( x \\right) > f\\left( x \\right) > 0\\)，则\n(A) \\(\\dfrac{f\\left( -2 \\right)}{f\\left( -1 \\right)} > 1\\)\n(B) \\(\\dfrac{f\\left( 0 \\right)}{f\\left( -1 \\right)} > e\\)\n(C) \\(\\dfrac{f\\left( 1 \\right)}{f\\left( -1 \\right)} < e^{2}\\)\n(D) \\(\\dfrac{f\\left( 2 \\right)}{f\\left( -1 \\right)} < e^{3}\\)",
        "answer": "B",
        "keyFormulas": [
          "f'(x)>f(x)>0",
          "\\left(e^{-x}f(x)\\right)'=e^{-x}(f'(x)-f(x))>0.",
          "e^{-x}f(x)",
          "x=0,-1",
          "e^{0}f(0)>e^{1}f(-1),",
          "\\frac{f(0)}{f(-1)}>e."
        ],
        "guide": {
          "concept": "极值看一阶导数变号，拐点看凹凸性改变。老师反复提醒：题目给的是函数图还是导函数图，必须先读清。",
          "method": "求定义域；求一阶导数并列符号表；极值再检查端点。拐点用二阶导数变号验证，不能只凭 f''(x)=0。",
          "pitfall": "驻点不一定是极值点，二阶导数为0也不一定是拐点。最值题不要漏掉区间端点。",
          "extension": "相邻考法包括不等式证明、最优化、切线截距和函数作图。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648003",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=14",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2020-7",
        "year": 2020,
        "number": 7,
        "kind": "单项选择题",
        "subject": "线性代数",
        "topic": "线性方程组",
        "question": "设 4 阶矩阵 \\(\\boldsymbol{A}=(a_{ij})\\) 不可逆，\\(a_{12}\\) 的代数余子式 \\(A_{12}\\ne 0\\)。记 \\(\\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_3,\\boldsymbol{\\alpha}_4\\) 为矩阵 \\(\\boldsymbol{A}\\) 的列向量，\\(\\boldsymbol{A}^*\\) 为 \\(\\boldsymbol{A}\\) 的伴随矩阵，则方程组\n\\[\\boldsymbol{A}^*\\boldsymbol{x}=0\n\\]\n的通解为\n(A) \\(\\boldsymbol{x}=k_1\\boldsymbol{\\alpha}_1+k_2\\boldsymbol{\\alpha}_2+k_3\\boldsymbol{\\alpha}_3\\)\n(B) \\(\\boldsymbol{x}=k_1\\boldsymbol{\\alpha}_1+k_2\\boldsymbol{\\alpha}_2+k_3\\boldsymbol{\\alpha}_4\\)\n(C) \\(\\boldsymbol{x}=k_1\\boldsymbol{\\alpha}_1+k_2\\boldsymbol{\\alpha}_3+k_3\\boldsymbol{\\alpha}_4\\)\n(D) \\(\\boldsymbol{x}=k_1\\boldsymbol{\\alpha}_2+k_2\\boldsymbol{\\alpha}_3+k_3\\boldsymbol{\\alpha}_4\\)\n其中 \\(k_1,k_2,k_3\\) 为任意常数。",
        "answer": "C",
        "keyFormulas": [
          "A_{12}\\ne0",
          "1,3,4",
          "\\operatorname{rank}(A)=3",
          "\\ker(A^*)",
          "\\boldsymbol{x}=k_1\\boldsymbol{\\alpha}_1+k_2\\boldsymbol{\\alpha}_3+k_3\\boldsymbol{\\alpha}_4."
        ],
        "guide": {
          "concept": "方程组先比较系数矩阵秩 r(A) 与增广矩阵秩 r(A,b)，再讨论无解、唯一解或无穷多解。",
          "method": "对增广矩阵做初等行变换；确定主元和自由变量；非齐次通解=一个特解+齐次方程通解。",
          "pitfall": "有参数时秩可能分情况变化；不要只看行列式为0就直接断言无解。",
          "extension": "相邻考法包括公共解、同解方程组与矩阵秩。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648003",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=14",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2020-8",
        "year": 2020,
        "number": 8,
        "kind": "单项选择题",
        "subject": "线性代数",
        "topic": "特征值、特征向量与相似",
        "question": "设 \\(\\boldsymbol{A}\\) 为 3 阶矩阵，\\(\\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2\\) 为 \\(\\boldsymbol{A}\\) 的属于特征值 \\(1\\) 的线性无关特征向量，\\(\\boldsymbol{\\alpha}_3\\) 为 \\(\\boldsymbol{A}\\) 的属于特征值 \\(-1\\) 的特征向量。则满足\n\\[\\boldsymbol{P}^{-1}\\boldsymbol{A}\\boldsymbol{P}=\n\\begin{pmatrix}\n1&0&0\\\\\n0&-1&0\\\\\n0&0&1\n\\end{pmatrix}\n\\]\n的可逆矩阵 \\(\\boldsymbol{P}\\) 可为\n(A) \\(\\left(\\boldsymbol{\\alpha}_1+\\boldsymbol{\\alpha}_3,\\ \\boldsymbol{\\alpha}_2,\\ -\\boldsymbol{\\alpha}_3\\right)\\)\n(B) \\(\\left(\\boldsymbol{\\alpha}_1+\\boldsymbol{\\alpha}_2,\\ \\boldsymbol{\\alpha}_2,\\ -\\boldsymbol{\\alpha}_3\\right)\\)\n(C) \\(\\left(\\boldsymbol{\\alpha}_1+\\boldsymbol{\\alpha}_3,\\ -\\boldsymbol{\\alpha}_3,\\ \\boldsymbol{\\alpha}_2\\right)\\)\n(D) \\(\\left(\\boldsymbol{\\alpha}_1+\\boldsymbol{\\alpha}_2,\\ -\\boldsymbol{\\alpha}_3,\\ \\boldsymbol{\\alpha}_2\\right)\\)",
        "answer": "D",
        "keyFormulas": [
          "P^{-1}AP=\\operatorname{diag}(1,-1,1)",
          "1,-1,1",
          "\\boldsymbol{\\alpha}_1+\\boldsymbol{\\alpha}_2",
          "-\\boldsymbol{\\alpha}_3",
          "\\boldsymbol{\\alpha}_2"
        ],
        "guide": {
          "concept": "先用特征方程找特征值，再解 (A-λE)x=0。能否对角化取决于线性无关特征向量是否足够。",
          "method": "利用迹、行列式和已知特征向量简化；分别求每个特征值的特征子空间维数；按列组成 P，并保持特征值顺序一致。",
          "pitfall": "重特征值不等于一定不能对角化；相似矩阵特征值相同，但反过来不一定相似。",
          "extension": "相邻考法包括矩阵幂、二次型正交变换和实对称矩阵。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648003",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=14",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2020-9",
        "year": 2020,
        "number": 9,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "综合应用",
        "question": "设\n\\[\\begin{cases}\nx=\\sqrt{t^2+1},\\\\\ny=\\ln\\!\\left(t+\\sqrt{t^2+1}\\right),\n\\end{cases}\n\\]\n则 \\(\\left.\\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2}\\right|_{t=1}=\\)",
        "answer": "\\(-\\sqrt{2}\\)",
        "keyFormulas": [
          "x=\\sqrt{t^2+1},\\qquad y=\\ln\\!\\left(t+\\sqrt{t^2+1}\\right),",
          "\\frac{\\mathrm{d}y}{\\mathrm{d}x}=\\frac{y'(t)}{x'(t)}\n=\\frac{1/\\sqrt{1+t^2}}{t/\\sqrt{1+t^2}}\n=\\frac1t.",
          "\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2}\n=\\frac{\\mathrm{d}}{\\mathrm{d}t}\\left(\\frac1t\\right)\\Big/\\frac{\\mathrm{d}x}{\\mathrm{d}t}\n=\\frac{-1/t^2}{t/\\sqrt{1+t^2}}\n=-\\frac{\\sqrt{1+t^2}}{t^3}.",
          "t=1",
          "-\\sqrt2"
        ],
        "guide": {
          "concept": "先判断题目属于高等数学还是线性代数，并把题干中的已知条件、所求对象和限制范围分别圈出。",
          "method": "选择最直接的定义或定理，先写公式，再代条件，保留关键中间步骤，最后用答案反查题意。",
          "pitfall": "不要在读题未完成时开始心算；符号、定义域、单侧条件和矩阵乘法顺序都是高频失分点。",
          "extension": "做完后把本题归入对应专题，再找一道同方法不同外观的题复做。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648003",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=14",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2020-10",
        "year": 2020,
        "number": 10,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "一元积分",
        "question": "\\(\\int_{0}^{1}{\\mathrm{d} y \\int_{\\sqrt{y}}^{1}{\\sqrt{x^{3}+1} \\mathrm{~d} x}} =\\)",
        "answer": "\\(\\dfrac{2}{9}(2\\sqrt{2}-1)\\)",
        "keyFormulas": [
          "\\int_0^1\\mathrm{d}y\\int_{\\sqrt y}^1\\sqrt{x^3+1}\\,\\mathrm{d}x\n=\\int_0^1\\mathrm{d}x\\int_0^{x^2}\\sqrt{x^3+1}\\,\\mathrm{d}y\n=\\int_0^1 x^2\\sqrt{x^3+1}\\,\\mathrm{d}x.",
          "u=x^3+1",
          "\\mathrm{d}u=3x^2\\,\\mathrm{d}x",
          "\\frac13\\int_1^2 u^{1/2}\\,\\mathrm{d}u\n=\\frac{2}{9}\\left[u^{3/2}\\right]_1^2\n=\\frac{2}{9}(2\\sqrt2-1)."
        ],
        "guide": {
          "concept": "先看结构再选方法：复合函数配导数用换元，乘积中一项求导变简单用分部积分，有理函数先做代数分解。",
          "method": "写出换元变量与新上下限；反常积分先把瑕点或无穷端点改写成极限；变上限积分先用微积分基本定理求导。",
          "pitfall": "不定积分别漏常数C；分段函数的原函数在分段点还必须连续；反常积分算出原函数不等于已经收敛，必须看极限。",
          "extension": "相邻考法包括积分比较、面积体积、积分不等式和含参积分。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648003",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=14",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2020-11",
        "year": 2020,
        "number": 11,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "综合应用",
        "question": "设 \\(z = \\arctan \\left[ xy + \\sin \\left( x+y \\right) \\right]\\)，则 \\(\\left. \\mathrm{d} z \\right|_{\\left( 0,\\pi \\right)} =\\)",
        "answer": "\\((\\pi-1)\\mathrm{d}x-\\mathrm{d}y\\)",
        "keyFormulas": [
          "u=xy+\\sin(x+y)",
          "z=\\arctan u",
          "\\mathrm{d}z=\\frac{1}{1+u^2}\\,\\mathrm{d}u.",
          "(0,\\pi)",
          "u=0",
          "u_x=y+\\cos(x+y)\\Big|_{(0,\\pi)}=\\pi-1,\\qquad\nu_y=x+\\cos(x+y)\\Big|_{(0,\\pi)}=-1.",
          "\\left.\\mathrm{d}z\\right|_{(0,\\pi)}=(\\pi-1)\\mathrm{d}x-\\mathrm{d}y."
        ],
        "guide": {
          "concept": "先判断题目属于高等数学还是线性代数，并把题干中的已知条件、所求对象和限制范围分别圈出。",
          "method": "选择最直接的定义或定理，先写公式，再代条件，保留关键中间步骤，最后用答案反查题意。",
          "pitfall": "不要在读题未完成时开始心算；符号、定义域、单侧条件和矩阵乘法顺序都是高频失分点。",
          "extension": "做完后把本题归入对应专题，再找一道同方法不同外观的题复做。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648003",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=14",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2020-12",
        "year": 2020,
        "number": 12,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "定积分的几何与物理应用",
        "question": "斜边长为 \\(2a\\) 的等腰直角三角形平板铅直地沉没在水中，且斜边与水面相齐。记重力加速度为 \\(g\\)，水的密度为 \\(\\rho\\)，则该平板一侧所受的水压力为",
        "answer": "\\(\\dfrac{1}{3}\\rho g a^3\\)",
        "keyFormulas": [
          "\\rho gy",
          "2(a-y)",
          "\\mathrm{d}F=\\rho gy\\cdot 2(a-y)\\,\\mathrm{d}y.",
          "F=2\\rho g\\int_0^a (a-y)y\\,\\mathrm{d}y\n=2\\rho g\\left[\\frac{ay^2}{2}-\\frac{y^3}{3}\\right]_0^a\n=\\frac13\\rho ga^3."
        ],
        "guide": {
          "concept": "先把几何量写成微元：面积、体积、弧长、压力或功，再决定沿哪个变量累加。",
          "method": "画图并标出典型小条；写微元公式；确定积分区间；最后检查结果量纲和正负。旋转体要先确认绕哪条轴。",
          "pitfall": "把半径、直径和到旋转轴的距离混淆，会让结果成倍出错；物理题还要统一单位。",
          "extension": "相邻考法包括相关变化率、最值和二重积分应用。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648003",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=14",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2020-13",
        "year": 2020,
        "number": 13,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "常微分方程",
        "question": "设 \\(y = y\\left( x \\right)\\) 满足 \\(y^{\\prime\\prime} + 2y^{\\prime} + y = 0\\)，且 \\(y\\left( 0 \\right) = 0\\)，\\(y^{\\prime}\\left( 0 \\right) = 1\\)，则 \\(\\int_{0}^{+\\infty}{y\\left( x \\right) \\mathrm{~d} x} =\\)",
        "answer": "\\(1\\)",
        "keyFormulas": [
          "y''+2y'+y=0",
          "y=(C_1+C_2x)e^{-x}.",
          "y(0)=0,\\ y'(0)=1",
          "C_1=0,\\ C_2=1",
          "y=xe^{-x}",
          "\\int_0^{+\\infty}y(x)\\,\\mathrm{d}x\n=\\int_0^{+\\infty}xe^{-x}\\,\\mathrm{d}x\n=1."
        ],
        "guide": {
          "concept": "先识别类型：可分离、一阶线性、伯努利、可降阶或二阶常系数。类型判断比直接试算更重要。",
          "method": "齐次部分先解特征方程；非齐次项按形式设特解，若与齐次解共振就乘 x 的适当次幂；最后用初值确定常数。",
          "pitfall": "设特解时多项式次数、指数因子和三角组合都要保留；共振次数漏乘 x 是高频错误。",
          "extension": "相邻考法包括微分方程建模、曲线族和积分方程。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648003",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=14",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2020-14",
        "year": 2020,
        "number": 14,
        "kind": "填空题",
        "subject": "线性代数",
        "topic": "行列式与矩阵运算",
        "question": "行列式\n\\[\\begin{vmatrix}\na&0&-1&1\\\\\n0&a&1&-1\\\\\n-1&1&a&0\\\\\n1&-1&0&a\n\\end{vmatrix}\n=\n\\]",
        "answer": "\\(a^2(a^2-4)\\)",
        "keyFormulas": [
          "\\begin{vmatrix}\na&0&-1&1\\\\\n0&a&1&-1\\\\\n-1&1&a&0\\\\\n1&-1&0&a\n\\end{vmatrix}\n\\sim\n\\begin{vmatrix}\na&0&0&0\\\\\n0&a&2&-1\\\\\n-1&2&a&0\\\\\n0&0&0&a\n\\end{vmatrix}.",
          "a^2\n\\begin{vmatrix}\na&2\\\\\n2&a\n\\end{vmatrix}\n=a^2(a^2-4)."
        ],
        "guide": {
          "concept": "矩阵题先看题目要求的是数值、秩、可逆性还是结构关系。矩阵乘法不能交换顺序。",
          "method": "优先使用初等变换、分块、A·A* = |A|E、可逆矩阵保持秩等性质，避免无目的展开。",
          "pitfall": "行变换与列变换对行列式的影响不同；矩阵等式中左右乘同一矩阵也要保持位置。",
          "extension": "相邻考法包括秩、方程组、特征值和相似。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648003",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=14",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2020-15",
        "year": 2020,
        "number": 15,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "连续、间断与渐近线",
        "question": "求曲线 \\(y = \\dfrac{x^{1+x}}{\\left( 1+x \\right)^{x}} \\left( x>0 \\right)\\) 的斜渐近线方程。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "y=\\frac{x^{1+x}}{(1+x)^x}=x\\left(1+\\frac1x\\right)^{-x}.",
          "x\\to+\\infty",
          "-x\\ln\\left(1+\\frac1x\\right)=-1+\\frac{1}{2x}+o\\!\\left(\\frac1x\\right),",
          "y=\\frac{x}{e}\\exp\\!\\left(\\frac{1}{2x}+o\\!\\left(\\frac1x\\right)\\right)\n=\\frac{x}{e}\\left(1+\\frac{1}{2x}+o\\!\\left(\\frac1x\\right)\\right)\n=\\frac{x}{e}+\\frac{1}{2e}+o(1).",
          "y=\\frac{1}{e}x+\\frac{1}{2e}."
        ],
        "guide": {
          "concept": "先列出所有可能出问题的点：分母为0、对数真数不正、根式越界以及分段点。连续要求极限存在并等于函数值。",
          "method": "对每个候选点分别算左右极限；渐近线则按垂直、水平、斜渐近线三类依次检查，斜渐近线用 k=lim f(x)/x、b=lim[f(x)-kx]。",
          "pitfall": "函数在点处有定义不代表连续；无定义也不代表一定是无穷间断。渐近线要区分 x→+∞ 与 x→-∞。",
          "extension": "相邻考法包括原函数存在性、可导与连续关系、间断点分类。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648003",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=14",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2020-16",
        "year": 2020,
        "number": 16,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "中值定理与零点证明",
        "question": "已知函数 \\(f\\left( x \\right)\\) 连续且 \\(\\lim\\limits_{x\\to 0}{\\dfrac{f\\left( x \\right)}{x}} = 1\\)，\\(g\\left( x \\right)=\\int_{0}^{1}{f\\left( xt \\right) \\mathrm{~d} t}\\)，求 \\(g^{\\prime}\\left( x \\right)\\)，并证明 \\(g^{\\prime}\\left( x \\right)\\) 在 \\(x=0\\) 处连续。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "x\\ne0",
          "u=xt",
          "g(x)=\\int_0^1 f(xt)\\,\\mathrm{d}t=\\frac{1}{x}\\int_0^x f(u)\\,\\mathrm{d}u.",
          "g'(x)=\\frac{x f(x)-\\int_0^x f(u)\\,\\mathrm{d}u}{x^2}\\qquad(x\\ne0).",
          "\\displaystyle \\lim_{x\\to0}\\frac{f(x)}x=1",
          "f(0)=0",
          "g'(0)=\\lim_{x\\to0}\\frac{g(x)-g(0)}{x}\n=\\lim_{x\\to0}\\frac{1}{x^2}\\int_0^x f(u)\\,\\mathrm{d}u\n=\\frac12.",
          "\\lim_{x\\to0}g'(x)\n=\\lim_{x\\to0}\\left(\\frac{f(x)}x-\\frac{1}{x^2}\\int_0^x f(u)\\,\\mathrm{d}u\\right)\n=1-\\frac12=\\frac12=g'(0)."
        ],
        "guide": {
          "concept": "存在性证明的核心是‘构造谁、在哪个区间用哪个定理’。目标式通常提示辅助函数的导数形式。",
          "method": "先用连续性和端点异号找零点；再根据目标式反推辅助函数。罗尔定理要逐项核对闭区间连续、开区间可导、端点函数值相等。",
          "pitfall": "只写‘由罗尔定理可得’但不说明区间与条件会丢步骤分；多个根要使用互不重叠的区间。",
          "extension": "常与积分中值定理、柯西中值定理、零点个数和不等式结合。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648003",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=14",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2020-17",
        "year": 2020,
        "number": 17,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "多元函数微分",
        "question": "求函数 \\(f\\left( x,y \\right)=x^{3}+8y^{3}-xy\\) 的极值。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "f_x=3x^2-y,\\qquad f_y=24y^2-x",
          "3x^2=y,\\qquad 24y^2=x.",
          "(0,0)",
          "\\left(\\dfrac16,\\dfrac1{12}\\right)",
          "f_{xx}=6x,\\qquad f_{xy}=-1,\\qquad f_{yy}=48y.",
          "\\Delta=f_{xx}f_{yy}-f_{xy}^2=288xy-1.",
          "\\Delta=-1<0",
          "\\Delta=3>0"
        ],
        "guide": {
          "concept": "多元题先区分偏导数、方向导数、全微分和复合函数链式法则。偏导存在不自动推出连续或可微。",
          "method": "画依赖关系：外层变量对中间变量求偏导，中间变量再对自变量求导；每条路径的乘积相加。指定点最后再代入。",
          "pitfall": "二阶混合偏导只有在相应连续条件下才能随意交换次序；沿坐标轴极限不能代替二元极限。",
          "extension": "相邻考法包括极值、条件极值、切平面与法线。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648003",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=14",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2020-18",
        "year": 2020,
        "number": 18,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "定积分的几何与物理应用",
        "question": "设函数 \\(f\\left( x \\right)\\) 的定义域为 \\(\\left( 0,+\\infty \\right)\\) 且满足\n\\[2f\\left( x \\right)+x^{2}f\\left( \\dfrac{1}{x} \\right)=\\dfrac{x^{2}+2x}{\\sqrt{1+x^{2}}}\n\\]\n求 \\(f\\left( x \\right)\\)，并求曲线 \\(y=f\\left( x \\right)\\)，\\(y=\\dfrac{1}{2}\\)，\\(y=\\dfrac{\\sqrt{3}}{2}\\) 及 \\(y\\) 轴所围图形绕 \\(x\\) 轴旋转所成旋转体的体积。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "2f(x)+x^2f\\!\\left(\\frac1x\\right)=\\frac{x^2+2x}{\\sqrt{1+x^2}}.",
          "\\dfrac1x",
          "x^2",
          "f(x)+2x^2f\\!\\left(\\frac1x\\right)=\\frac{x+2x^2}{\\sqrt{1+x^2}}.",
          "f(x)=\\frac{x}{\\sqrt{1+x^2}}.",
          "y=\\dfrac{x}{\\sqrt{1+x^2}}",
          "x=\\frac{y}{\\sqrt{1-y^2}}.",
          "V=2\\pi\\int_{1/2}^{\\sqrt3/2} y\\cdot \\frac{y}{\\sqrt{1-y^2}}\\,\\mathrm{d}y\n=2\\pi\\int_{1/2}^{\\sqrt3/2}\\frac{y^2}{\\sqrt{1-y^2}}\\,\\mathrm{d}y."
        ],
        "guide": {
          "concept": "先把几何量写成微元：面积、体积、弧长、压力或功，再决定沿哪个变量累加。",
          "method": "画图并标出典型小条；写微元公式；确定积分区间；最后检查结果量纲和正负。旋转体要先确认绕哪条轴。",
          "pitfall": "把半径、直径和到旋转轴的距离混淆，会让结果成倍出错；物理题还要统一单位。",
          "extension": "相邻考法包括相关变化率、最值和二重积分应用。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648003",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=14",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2020-19",
        "year": 2020,
        "number": 19,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "二重积分与区域变换",
        "question": "设平面区域 \\(D\\) 由直线 \\(x=1\\)，\\(x=2\\)，\\(y=x\\) 与 \\(x\\) 轴围成。计算\n\\[\\iint_{D}{\\dfrac{\\sqrt{x^{2}+y^{2}}}{x} \\mathrm{~d} x \\mathrm{~d} y}\n\\]",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "x=1,\\ x=2,\\ y=0,\\ y=x",
          "x=r\\cos\\theta,\\qquad y=r\\sin\\theta,\\qquad 0\\le \\theta\\le \\frac{\\pi}{4},",
          "\\sec\\theta \\le r \\le 2\\sec\\theta.",
          "\\int_0^{\\pi/4}\\int_{\\sec\\theta}^{2\\sec\\theta}\n\\frac{r}{r\\cos\\theta}\\,r\\,\\mathrm{d}r\\,\\mathrm{d}\\theta\n=\\frac32\\int_0^{\\pi/4}\\sec^3\\theta\\,\\mathrm{d}\\theta.",
          "\\int_0^{\\pi/4}\\sec^3\\theta\\,\\mathrm{d}\\theta\n=\\frac{\\sqrt2}{2}+\\frac12\\ln(\\sqrt2+1).",
          "\\frac34\\sqrt2+\\frac34\\ln(\\sqrt2+1)."
        ],
        "guide": {
          "concept": "二重积分先画区域。很多计算错误不是积分不会，而是上下限描述了错误的区域。",
          "method": "标出边界交点；选择先 x 后 y 或先 y 后 x；圆、扇形和只含 x²+y² 的结构优先考虑极坐标，并补上雅可比 r。",
          "pitfall": "交换积分次序必须重新写全部上下限；利用对称性前先检查区域和被积函数奇偶性。",
          "extension": "相邻考法包括体积、质心、变换积分次序和参数区域。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648003",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=14",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2020-20",
        "year": 2020,
        "number": 20,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "中值定理与零点证明",
        "question": "设函数 \\(f\\left( x \\right)=\\int_{1}^{x}{e^{t^{2}} \\mathrm{~d} t}\\)。\n证明：存在 \\(\\xi \\in \\left( 1,2 \\right)\\)，使得 \\(f\\left( \\xi \\right)=\\left( 2-\\xi \\right)e^{\\xi^{2}}\\)；\n证明：存在 \\(\\eta \\in \\left( 1,2 \\right)\\)，使得 \\(f\\left( 2 \\right)=\\ln 2 \\cdot \\eta e^{\\eta^{2}}\\)。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "F(x)=f(x)+(x-2)e^{x^2}.",
          "F(1)= -e<0,\\qquad F(2)=f(2)>0.",
          "\\xi\\in(1,2)",
          "F(\\xi)=0",
          "f(\\xi)=(2-\\xi)e^{\\xi^2}.",
          "g(x)=\\ln x",
          "f(x)",
          "g(x)"
        ],
        "guide": {
          "concept": "存在性证明的核心是‘构造谁、在哪个区间用哪个定理’。目标式通常提示辅助函数的导数形式。",
          "method": "先用连续性和端点异号找零点；再根据目标式反推辅助函数。罗尔定理要逐项核对闭区间连续、开区间可导、端点函数值相等。",
          "pitfall": "只写‘由罗尔定理可得’但不说明区间与条件会丢步骤分；多个根要使用互不重叠的区间。",
          "extension": "常与积分中值定理、柯西中值定理、零点个数和不等式结合。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648003",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=14",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2020-21",
        "year": 2020,
        "number": 21,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "常微分方程",
        "question": "设函数 \\(f\\left( x \\right)\\) 可导，且 \\(f^{\\prime}\\left( x \\right)>0\\)，曲线 \\(y=f\\left( x \\right)\\left( x\\geq 0 \\right)\\) 经过坐标原点 \\(O\\)。\\(M\\) 为其上任意一点，点 \\(M\\) 处的切线与 \\(x\\) 轴交于点 \\(T\\)，又 \\(MP\\) 垂直 \\(x\\) 轴于点 \\(P\\)。已知由曲线 \\(y=f\\left( x \\right)\\)、直线 \\(MP\\) 以及 \\(x\\) 轴所围图形的面积与 \\(\\triangle MTP\\) 的面积之比恒为 \\(3:2\\)，求满足上述条件的曲线方程。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "M(x,y)",
          "T\\left(x-\\frac{y}{y'},\\,0\\right).",
          "S_{\\triangle MTP}=\\frac12\\cdot \\frac{y}{y'}\\cdot y=\\frac{y^2}{2y'}.",
          "\\int_0^x y(t)\\,\\mathrm{d}t : \\frac{y^2}{2y'} = 3:2,",
          "\\int_0^x y(t)\\,\\mathrm{d}t=\\frac34\\cdot \\frac{y^2}{y'}.",
          "3yy''-2(y')^2=0.",
          "p=y'",
          "y''"
        ],
        "guide": {
          "concept": "先识别类型：可分离、一阶线性、伯努利、可降阶或二阶常系数。类型判断比直接试算更重要。",
          "method": "齐次部分先解特征方程；非齐次项按形式设特解，若与齐次解共振就乘 x 的适当次幂；最后用初值确定常数。",
          "pitfall": "设特解时多项式次数、指数因子和三角组合都要保留；共振次数漏乘 x 是高频错误。",
          "extension": "相邻考法包括微分方程建模、曲线族和积分方程。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648003",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=14",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2020-22",
        "year": 2020,
        "number": 22,
        "kind": "解答题",
        "subject": "线性代数",
        "topic": "二次型",
        "question": "设二次型\n\\[f(x_1,x_2,x_3)=x_1^2+x_2^2+x_3^2+2ax_1x_2+2ax_1x_3+2ax_2x_3\n\\]\n经过可逆线性变换\n\\[\\begin{pmatrix}\nx_1\\\\\nx_2\\\\\nx_3\n\\end{pmatrix}\n=\n\\boldsymbol{P}\n\\begin{pmatrix}\ny_1\\\\\ny_2\\\\\ny_3\n\\end{pmatrix}\n\\]\n化为二次型\n\\[g(y_1,y_2,y_3)=y_1^2+y_2^2+4y_3^2+2y_1y_2.\n\\]\n求 \\(a\\) 的值；\n求可逆矩阵 \\(\\boldsymbol{P}\\)。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "A=\\begin{pmatrix}\n1&a&a\\\\\na&1&a\\\\\na&a&1\n\\end{pmatrix}.",
          "1-a,\\quad 1-a,\\quad 1+2a.",
          "g(y_1,y_2,y_3)=y_1^2+y_2^2+4y_3^2+2y_1y_2=(y_1+y_2)^2+4y_3^2",
          "1-a>0,\\qquad 1+2a=0,",
          "a=-\\frac12.",
          "a=-\\dfrac12",
          "f=x_1^2+x_2^2+x_3^2-x_1x_2-x_1x_3-x_2x_3\n=\\left(x_1-\\frac{x_2+x_3}{2}\\right)^2+\\frac34(x_2-x_3)^2.",
          "\\begin{cases}\nz_1=x_1-\\dfrac{x_2+x_3}{2},\\\\[4pt]\nz_2=\\dfrac{\\sqrt3}{2}(x_2-x_3),\\\\[4pt]\nz_3=x_3,\n\\end{cases}"
        ],
        "guide": {
          "concept": "二次型先写对称矩阵，交叉项 2aᵢⱼxᵢxⱼ 对应矩阵中的 aᵢⱼ，而不是2aᵢⱼ。",
          "method": "配方法用于一般可逆线性变换；实对称矩阵正交对角化用特征值和单位正交特征向量；正定性可用顺序主子式。",
          "pitfall": "标准形系数与特征值只在正交变换下直接对应；规范形只保留正负号和零。",
          "extension": "相邻考法包括合同、惯性指数和矩阵正定性。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648003",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=14",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2020-23",
        "year": 2020,
        "number": 23,
        "kind": "解答题",
        "subject": "线性代数",
        "topic": "特征值、特征向量与相似",
        "question": "设 \\(\\boldsymbol{A}\\) 为 2 阶矩阵，\\(\\boldsymbol{P}=(\\boldsymbol{\\alpha},\\boldsymbol{A}\\boldsymbol{\\alpha})\\)，其中 \\(\\boldsymbol{\\alpha}\\) 是非零向量且不是 \\(\\boldsymbol{A}\\) 的特征向量。\n证明 \\(\\boldsymbol{P}\\) 为可逆矩阵；\n若 \\(\\boldsymbol{A}^2\\boldsymbol{\\alpha}+\\boldsymbol{A}\\boldsymbol{\\alpha}-6\\boldsymbol{\\alpha}=0\\)，求 \\(\\boldsymbol{P}^{-1}\\boldsymbol{A}\\boldsymbol{P}\\)，并判断 \\(\\boldsymbol{A}\\) 是否相似于对角矩阵。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "P=(\\alpha,A\\alpha)",
          "\\alpha",
          "A\\alpha",
          "A\\alpha=k\\alpha",
          "A^2\\alpha+A\\alpha-6\\alpha=0",
          "A^2\\alpha=6\\alpha-A\\alpha.",
          "AP=A(\\alpha,A\\alpha)=(A\\alpha,A^2\\alpha)=(A\\alpha,6\\alpha-A\\alpha)\n=P\\begin{pmatrix}0&6\\\\1&-1\\end{pmatrix}.",
          "P^{-1}AP=\\begin{pmatrix}0&6\\\\1&-1\\end{pmatrix}."
        ],
        "guide": {
          "concept": "先用特征方程找特征值，再解 (A-λE)x=0。能否对角化取决于线性无关特征向量是否足够。",
          "method": "利用迹、行列式和已知特征向量简化；分别求每个特征值的特征子空间维数；按列组成 P，并保持特征值顺序一致。",
          "pitfall": "重特征值不等于一定不能对角化；相似矩阵特征值相同，但反过来不一定相似。",
          "extension": "相邻考法包括矩阵幂、二次型正交变换和实对称矩阵。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20648003",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=14",
        "videoExtraUrl": ""
      }
    ]
  },
  {
    "year": 2021,
    "videoPage": 17,
    "items": [
      {
        "id": "math2-2021-1",
        "year": 2021,
        "number": 1,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "等价无穷小与泰勒展开",
        "question": "当 \\(x \\to 0\\) 时，\\(\\int_{0}^{x^{2}} \\left(e^{t}-1\\right) \\mathrm{d} t\\) 是 \\(x^{7}\\) 的\nA. 低阶无穷小\nB. 等价无穷小\nC. 高阶无穷小\nD. 同阶但非等价无穷小",
        "answer": "C",
        "keyFormulas": [
          "F(x)=\\int_0^{x^2}(e^t-1)\\,\\mathrm{d}t",
          "F'(x)=2x(e^{x^2}-1)\\sim 2x^3.",
          "F(x)\\sim \\dfrac{x^4}{2}",
          "x^7"
        ],
        "guide": {
          "concept": "先看每一项在趋近点附近的最低非零次幂。老师在视频里强调：比较阶数时系数通常不重要，但正负号、幂次和趋近条件绝不能口算带过。",
          "method": "把根式、对数、指数、三角函数逐个换成标准等价式；若相减造成低阶项抵消，就立即改用泰勒展开，写到第一个不为零的项。最后只比较幂指数。",
          "pitfall": "最容易把 1-cos x 与 cos x-1 的符号写反，或在加减结构中违规直接做等价替换。先确认替换对象整体趋于0。",
          "extension": "同一知识点还会考极限值、无穷小阶数排序、参数确定和泰勒系数。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647953",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=17",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2021-2",
        "year": 2021,
        "number": 2,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "极限计算",
        "question": "函数\n\\[f(x)=\n\\begin{cases}\n\\dfrac{e^x-1}{x}, & x\\ne 0,\\\\\n1, & x=0\n\\end{cases}\n\\]\n在 \\(x=0\\) 处\nA. 连续且取极大值\nB. 连续且取极小值\nC. 可导且导数为 \\(0\\)\nD. 可导且导数不为 \\(0\\)",
        "answer": "D",
        "keyFormulas": [
          "\\lim_{x\\to 0}\\frac{e^x-1}{x}=1=f(0),",
          "x=0",
          "f'(0)=\\lim_{x\\to 0}\\frac{f(x)-f(0)}{x}\n=\\lim_{x\\to 0}\\frac{e^x-1-x}{x^2}\n=\\frac12\\ne 0."
        ],
        "guide": {
          "concept": "极限题的关键不是一上来求导，而是先判断未定式类型，再选择等价无穷小、洛必达、泰勒、夹逼、单调有界或定积分定义。",
          "method": "第一行写清趋近方向和分子分母的量级；第二行处理主导项；第三行再约分或求导。遇到和式先试定积分定义，遇到递推先找单调性与界。",
          "pitfall": "连续使用洛必达会掩盖结构，也容易在不满足条件时误用。含绝对值、单侧极限和参数时必须分别检查。",
          "extension": "可联动复习无穷小比较、数列极限、函数极限和含参极限。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647953",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=17",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2021-3",
        "year": 2021,
        "number": 3,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "定积分的几何与物理应用",
        "question": "有一圆柱体底面半径与高随时间变化的速率分别为 \\(2 \\text{ cm/s}\\)、\\(-3 \\text{ cm/s}\\)。当底面半径为 \\(10 \\text{ cm}\\)，高为 \\(5 \\text{ cm}\\) 时，圆柱体的体积与表面积随时间变化的速率分别为\nA. \\(125\\pi \\text{ cm}^{3}\\text{/s}\\)，\\(40\\pi \\text{ cm}^{2}\\text{/s}\\)\nB. \\(125\\pi \\text{ cm}^{3}\\text{/s}\\)，\\(-40\\pi \\text{ cm}^{2}\\text{/s}\\)\nC. \\(-100\\pi \\text{ cm}^{3}\\text{/s}\\)，\\(40\\pi \\text{ cm}^{2}\\text{/s}\\)\nD. \\(-100\\pi \\text{ cm}^{3}\\text{/s}\\)，\\(-40\\pi \\text{ cm}^{2}\\text{/s}\\)",
        "answer": "C",
        "keyFormulas": [
          "V=\\pi r^2h,\\ S=2\\pi rh+2\\pi r^2",
          "\\dfrac{\\mathrm{d}r}{\\mathrm{d}t}=2,\\ \\dfrac{\\mathrm{d}h}{\\mathrm{d}t}=-3",
          "r=10,\\ h=5",
          "\\frac{\\mathrm{d}V}{\\mathrm{d}t}=-100\\pi,\\qquad \\frac{\\mathrm{d}S}{\\mathrm{d}t}=40\\pi."
        ],
        "guide": {
          "concept": "先把几何量写成微元：面积、体积、弧长、压力或功，再决定沿哪个变量累加。",
          "method": "画图并标出典型小条；写微元公式；确定积分区间；最后检查结果量纲和正负。旋转体要先确认绕哪条轴。",
          "pitfall": "把半径、直径和到旋转轴的距离混淆，会让结果成倍出错；物理题还要统一单位。",
          "extension": "相邻考法包括相关变化率、最值和二重积分应用。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647953",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=17",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2021-4",
        "year": 2021,
        "number": 4,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "中值定理与零点证明",
        "question": "设函数 \\(f(x)=ax-b\\ln x\\)，其中 \\(a>0\\)。若 \\(f(x)\\) 有两个零点，则 \\(\\dfrac{b}{a}\\) 的取值范围是\nA. \\(\\left(e,+\\infty\\right)\\)\nB. \\(\\left(0,e\\right)\\)\nC. \\(\\left(0,\\dfrac{1}{e}\\right)\\)\nD. \\(\\left(\\dfrac{1}{e},+\\infty\\right)\\)",
        "answer": "A",
        "keyFormulas": [
          "f'(x)=a-\\frac{b}{x},",
          "x=\\dfrac{b}{a}",
          "f\\left(\\frac{b}{a}\\right)=b-b\\ln\\frac{b}{a}<0.",
          "b>0",
          "1-\\ln\\frac{b}{a}<0 \\Longrightarrow \\frac{b}{a}>e."
        ],
        "guide": {
          "concept": "存在性证明的核心是‘构造谁、在哪个区间用哪个定理’。目标式通常提示辅助函数的导数形式。",
          "method": "先用连续性和端点异号找零点；再根据目标式反推辅助函数。罗尔定理要逐项核对闭区间连续、开区间可导、端点函数值相等。",
          "pitfall": "只写‘由罗尔定理可得’但不说明区间与条件会丢步骤分；多个根要使用互不重叠的区间。",
          "extension": "常与积分中值定理、柯西中值定理、零点个数和不等式结合。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647953",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=17",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2021-5",
        "year": 2021,
        "number": 5,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "等价无穷小与泰勒展开",
        "question": "设函数 \\(f(x)=\\sec x\\) 在 \\(x=0\\) 处的 2 次泰勒多项式为 \\(1+ax+bx^2\\)，则\nA. \\(a=1\\)，\\(b=-\\dfrac{1}{2}\\)\nB. \\(a=1\\)，\\(b=\\dfrac{1}{2}\\)\nC. \\(a=0\\)，\\(b=-\\dfrac{1}{2}\\)\nD. \\(a=0\\)，\\(b=\\dfrac{1}{2}\\)",
        "answer": "D",
        "keyFormulas": [
          "f(0)=1,\\qquad f'(0)=\\sec 0\\tan 0=0,\\qquad f''(0)=1,",
          "\\sec x=1+\\frac12x^2+o(x^2).",
          "a=0,\\ b=\\dfrac12"
        ],
        "guide": {
          "concept": "先看每一项在趋近点附近的最低非零次幂。老师在视频里强调：比较阶数时系数通常不重要，但正负号、幂次和趋近条件绝不能口算带过。",
          "method": "把根式、对数、指数、三角函数逐个换成标准等价式；若相减造成低阶项抵消，就立即改用泰勒展开，写到第一个不为零的项。最后只比较幂指数。",
          "pitfall": "最容易把 1-cos x 与 cos x-1 的符号写反，或在加减结构中违规直接做等价替换。先确认替换对象整体趋于0。",
          "extension": "同一知识点还会考极限值、无穷小阶数排序、参数确定和泰勒系数。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647953",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=17",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2021-6",
        "year": 2021,
        "number": 6,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "多元函数微分",
        "question": "设函数 \\(f(x,y)\\) 可微，且\n\\[f(x+1,e^x)=x^2(x+1),\\qquad f(x,x^2)=2x^2\\ln x,\n\\]\n则 \\(\\mathrm{d} f(1,1)=\\)\nA. \\(\\mathrm{d}x+\\mathrm{d}y\\)\nB. \\(\\mathrm{d}x-\\mathrm{d}y\\)\nC. \\(\\mathrm{d}y\\)\nD. \\(-\\mathrm{d}y\\)",
        "answer": "C",
        "keyFormulas": [
          "f_x(x+1,e^x)+e^x f_y(x+1,e^x)=x^2+2x(x+1),",
          "f_x(x,x^2)+2x f_y(x,x^2)=4x\\ln x+2x.",
          "x=0",
          "x=1",
          "f_x(1,1)+f_y(1,1)=1,\\qquad f_x(1,1)+2f_y(1,1)=2.",
          "f_x(1,1)=0,\\ f_y(1,1)=1",
          "\\mathrm{d}f(1,1)=\\mathrm{d}y."
        ],
        "guide": {
          "concept": "多元题先区分偏导数、方向导数、全微分和复合函数链式法则。偏导存在不自动推出连续或可微。",
          "method": "画依赖关系：外层变量对中间变量求偏导，中间变量再对自变量求导；每条路径的乘积相加。指定点最后再代入。",
          "pitfall": "二阶混合偏导只有在相应连续条件下才能随意交换次序；沿坐标轴极限不能代替二元极限。",
          "extension": "相邻考法包括极值、条件极值、切平面与法线。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647953",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=17",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2021-7",
        "year": 2021,
        "number": 7,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "极限计算",
        "question": "设函数 \\(f(x)\\) 在区间 \\(\\left[0,1\\right]\\) 上连续，则\n\\[\\int_{0}^{1} f(x)\\,\\mathrm{d}x=\n\\]\nA. \\(\\lim_{n \\to \\infty}\\sum_{k=1}^{n} f\\left(\\dfrac{2k-1}{2n}\\right)\\dfrac{1}{2n}\\)\nB. \\(\\lim_{n \\to \\infty}\\sum_{k=1}^{n} f\\left(\\dfrac{2k-1}{2n}\\right)\\dfrac{1}{n}\\)\nC. \\(\\lim_{n \\to \\infty}\\sum_{k=1}^{2n} f\\left(\\dfrac{k-1}{2n}\\right)\\dfrac{1}{n}\\)\nD. \\(\\lim_{n \\to \\infty}\\sum_{k=1}^{2n} f\\left(\\dfrac{k}{2n}\\right)\\dfrac{2}{n}\\)",
        "answer": "B",
        "keyFormulas": [
          "[0,1]",
          "\\dfrac1n",
          "\\dfrac{2k-1}{2n}",
          "\\sum_{k=1}^n f\\left(\\frac{2k-1}{2n}\\right)\\frac1n."
        ],
        "guide": {
          "concept": "极限题的关键不是一上来求导，而是先判断未定式类型，再选择等价无穷小、洛必达、泰勒、夹逼、单调有界或定积分定义。",
          "method": "第一行写清趋近方向和分子分母的量级；第二行处理主导项；第三行再约分或求导。遇到和式先试定积分定义，遇到递推先找单调性与界。",
          "pitfall": "连续使用洛必达会掩盖结构，也容易在不满足条件时误用。含绝对值、单侧极限和参数时必须分别检查。",
          "extension": "可联动复习无穷小比较、数列极限、函数极限和含参极限。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647953",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=17",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2021-8",
        "year": 2021,
        "number": 8,
        "kind": "单项选择题",
        "subject": "线性代数",
        "topic": "二次型",
        "question": "二次型\n\\[f(x_1,x_2,x_3)=\\left(x_1+x_2\\right)^2+\\left(x_2+x_3\\right)^2-\\left(x_3-x_1\\right)^2\n\\]\n的正惯性指数与负惯性指数依次为\nA. \\(2,0\\)\nB. \\(1,1\\)\nC. \\(2,1\\)\nD. \\(1,2\\)",
        "answer": "B",
        "keyFormulas": [
          "f=2x_2^2+2x_1x_2+2x_2x_3+2x_1x_3,",
          "A=\\begin{pmatrix}\n0&1&1\\\\\n1&2&1\\\\\n1&1&0\n\\end{pmatrix}.",
          "|\\lambda E-A|=(\\lambda+1)(\\lambda-3)\\lambda,",
          "-1,0,3"
        ],
        "guide": {
          "concept": "二次型先写对称矩阵，交叉项 2aᵢⱼxᵢxⱼ 对应矩阵中的 aᵢⱼ，而不是2aᵢⱼ。",
          "method": "配方法用于一般可逆线性变换；实对称矩阵正交对角化用特征值和单位正交特征向量；正定性可用顺序主子式。",
          "pitfall": "标准形系数与特征值只在正交变换下直接对应；规范形只保留正负号和零。",
          "extension": "相邻考法包括合同、惯性指数和矩阵正定性。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647953",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=17",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2021-9",
        "year": 2021,
        "number": 9,
        "kind": "单项选择题",
        "subject": "线性代数",
        "topic": "向量组与线性相关",
        "question": "设 3 阶矩阵 \\(\\boldsymbol{A}=\\left(\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3}\\right)\\)，\\(\\boldsymbol{B}=\\left(\\boldsymbol{\\beta}_{1},\\boldsymbol{\\beta}_{2},\\boldsymbol{\\beta}_{3}\\right)\\)。若向量组 \\(\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3}\\) 可以由向量组 \\(\\boldsymbol{\\beta}_{1},\\boldsymbol{\\beta}_{2},\\boldsymbol{\\beta}_{3}\\) 线性表出，则\nA. \\(\\boldsymbol{A}\\boldsymbol{x}=0\\) 的解均为 \\(\\boldsymbol{B}\\boldsymbol{x}=0\\) 的解\nB. \\(\\boldsymbol{A}^{\\mathrm{T}}\\boldsymbol{x}=0\\) 的解均为 \\(\\boldsymbol{B}^{\\mathrm{T}}\\boldsymbol{x}=0\\) 的解\nC. \\(\\boldsymbol{B}\\boldsymbol{x}=0\\) 的解均为 \\(\\boldsymbol{A}\\boldsymbol{x}=0\\) 的解\nD. \\(\\boldsymbol{B}^{\\mathrm{T}}\\boldsymbol{x}=0\\) 的解均为 \\(\\boldsymbol{A}^{\\mathrm{T}}\\boldsymbol{x}=0\\) 的解",
        "answer": "D",
        "keyFormulas": [
          "A=BP.",
          "B^{\\mathrm T}x=0",
          "A^{\\mathrm T}x=(BP)^{\\mathrm T}x=P^{\\mathrm T}B^{\\mathrm T}x=0.",
          "\\boldsymbol{B}^{\\mathrm T}x=0",
          "\\boldsymbol{A}^{\\mathrm T}x=0"
        ],
        "guide": {
          "concept": "线性相关的本质是能否找到不全为0的系数组合成零向量；秩等于最大线性无关组所含向量数。",
          "method": "把向量按列组成矩阵并做行化简；主元列给出最大无关组；自由变量对应齐次方程基础解系。",
          "pitfall": "不要把行化简后的列直接当成原向量组的最大无关组；选列应回到原矩阵对应位置。",
          "extension": "相邻考法包括线性表示、秩不等式和解空间维数。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647953",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=17",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2021-10",
        "year": 2021,
        "number": 10,
        "kind": "单项选择题",
        "subject": "线性代数",
        "topic": "行列式与矩阵运算",
        "question": "已知矩阵\n\\[\\boldsymbol{A}=\\begin{pmatrix}\n1 & 0 & -1 \\\\\n2 & -1 & 1 \\\\\n-1 & 2 & -5\n\\end{pmatrix}.\n\\]\n若存在下三角可逆矩阵 \\(\\boldsymbol{P}\\) 和上三角可逆矩阵 \\(\\boldsymbol{Q}\\)，使 \\(\\boldsymbol{P}\\boldsymbol{A}\\boldsymbol{Q}\\) 为对角矩阵，则 \\(\\boldsymbol{P}\\)，\\(\\boldsymbol{Q}\\) 可以分别取\nA. \\(\\begin{pmatrix}1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1\\end{pmatrix}\\)，\\(\\begin{pmatrix}1 & 0 & 1 \\\\ 0 & 1 & 3 \\\\ 0 & 0 & 1\\end{pmatrix}\\)\nB. \\(\\begin{pmatrix}1 & 0 & 0 \\\\ 2 & -1 & 0 \\\\ -3 & 2 & 1\\end{pmatrix}\\)，\\(\\begin{pmatrix}1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1\\end{pmatrix}\\)\nC. \\(\\begin{pmatrix}1 & 0 & 0 \\\\ 2 & -1 & 0 \\\\ -3 & 2 & 1\\end{pmatrix}\\)，\\(\\begin{pmatrix}1 & 0 & 1 \\\\ 0 & 1 & 3 \\\\ 0 & 0 & 1\\end{pmatrix}\\)\nD. \\(\\begin{pmatrix}1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 1 & 3 & 1\\end{pmatrix}\\)，\\(\\begin{pmatrix}1 & 2 & -3 \\\\ 0 & -1 & 2 \\\\ 0 & 0 & 1\\end{pmatrix}\\)",
        "answer": "C",
        "keyFormulas": [
          "P=\\begin{pmatrix}\n1 & 0 & 0 \\\\\n2 & -1 & 0 \\\\\n-3 & 2 & 1\n\\end{pmatrix}.",
          "Q=\\begin{pmatrix}\n1 & 0 & 1 \\\\\n0 & 1 & 3 \\\\\n0 & 0 & 1\n\\end{pmatrix}."
        ],
        "guide": {
          "concept": "矩阵题先看题目要求的是数值、秩、可逆性还是结构关系。矩阵乘法不能交换顺序。",
          "method": "优先使用初等变换、分块、A·A* = |A|E、可逆矩阵保持秩等性质，避免无目的展开。",
          "pitfall": "行变换与列变换对行列式的影响不同；矩阵等式中左右乘同一矩阵也要保持位置。",
          "extension": "相邻考法包括秩、方程组、特征值和相似。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647953",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=17",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2021-11",
        "year": 2021,
        "number": 11,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "综合应用",
        "question": "\\[\\int_{-\\infty}^{+\\infty} |x|3^{-x^2}\\,\\mathrm{d}x= \\underline{\\hspace{6em}}\n\\]",
        "answer": "\\(\\dfrac{1}{\\ln 3}\\)",
        "keyFormulas": [
          "\\int_{-\\infty}^{+\\infty}|x|3^{-x^2}\\,\\mathrm{d}x\n=2\\int_0^{+\\infty}x3^{-x^2}\\,\\mathrm{d}x.",
          "u=-x^2",
          "2\\int_0^{+\\infty}x3^{-x^2}\\,\\mathrm{d}x\n=-\\int_0^{+\\infty}3^{-x^2}\\,\\mathrm{d}(-x^2)\n=\\frac{1}{\\ln 3}."
        ],
        "guide": {
          "concept": "先判断题目属于高等数学还是线性代数，并把题干中的已知条件、所求对象和限制范围分别圈出。",
          "method": "选择最直接的定义或定理，先写公式，再代条件，保留关键中间步骤，最后用答案反查题意。",
          "pitfall": "不要在读题未完成时开始心算；符号、定义域、单侧条件和矩阵乘法顺序都是高频失分点。",
          "extension": "做完后把本题归入对应专题，再找一道同方法不同外观的题复做。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647953",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=17",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2021-12",
        "year": 2021,
        "number": 12,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "综合应用",
        "question": "设函数 \\(y=y(x)\\) 由参数方程\n\\[\\begin{cases}\nx=2e^t+t+1,\\\\\ny=4(t-1)e^t+t^2\n\\end{cases}\n\\]\n确定，则\n\\[\\left.\\frac{\\mathrm{d}^2 y}{\\mathrm{d} x^2}\\right|_{t=0}= \\underline{\\hspace{6em}}\n\\]",
        "answer": "\\(\\dfrac{2}{3}\\)",
        "keyFormulas": [
          "\\frac{\\mathrm{d}y}{\\mathrm{d}x}\n=\\frac{\\mathrm{d}y/\\mathrm{d}t}{\\mathrm{d}x/\\mathrm{d}t}\n=\\frac{4te^t+2t}{2e^t+1}.",
          "\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}=2e^t+1",
          "t=0",
          "\\left.\\frac{\\mathrm{d}^2 y}{\\mathrm{d} x^2}\\right|_{t=0}=\\frac23."
        ],
        "guide": {
          "concept": "先判断题目属于高等数学还是线性代数，并把题干中的已知条件、所求对象和限制范围分别圈出。",
          "method": "选择最直接的定义或定理，先写公式，再代条件，保留关键中间步骤，最后用答案反查题意。",
          "pitfall": "不要在读题未完成时开始心算；符号、定义域、单侧条件和矩阵乘法顺序都是高频失分点。",
          "extension": "做完后把本题归入对应专题，再找一道同方法不同外观的题复做。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647953",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=17",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2021-13",
        "year": 2021,
        "number": 13,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "多元函数微分",
        "question": "设函数 \\(z=z(x,y)\\) 由方程\n\\[(x+1)z+y\\ln z-\\arctan(2xy)=1\n\\]\n确定，则\n\\[\\left.\\frac{\\partial z}{\\partial x}\\right|_{(0,2)}= \\underline{\\hspace{6em}}\n\\]",
        "answer": "\\(1\\)",
        "keyFormulas": [
          "(x,y)=(0,2)",
          "z=1",
          "z+(x+1)z_x+y\\frac{1}{z}z_x-\\frac{2y}{1+4x^2y^2}=0.",
          "(x,y,z)=(0,2,1)",
          "1+z_x+2z_x-4=0,",
          "z_x=1"
        ],
        "guide": {
          "concept": "多元题先区分偏导数、方向导数、全微分和复合函数链式法则。偏导存在不自动推出连续或可微。",
          "method": "画依赖关系：外层变量对中间变量求偏导，中间变量再对自变量求导；每条路径的乘积相加。指定点最后再代入。",
          "pitfall": "二阶混合偏导只有在相应连续条件下才能随意交换次序；沿坐标轴极限不能代替二元极限。",
          "extension": "相邻考法包括极值、条件极值、切平面与法线。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647953",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=17",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2021-14",
        "year": 2021,
        "number": 14,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "一元积分",
        "question": "已知函数\n\\[f(t)=\\int_{1}^{t} \\mathrm{d}x \\int_{\\sqrt{x}}^{1} \\sin \\frac{x}{y}\\,\\mathrm{d}y,\n\\]\n则\n\\[f'\\left(\\frac{\\pi}{2}\\right)= \\underline{\\hspace{18em}}\n\\]",
        "answer": "\\(\\pi \\int_{\\sqrt{\\frac{\\pi}{2}}}^{\\frac{\\pi}{2}} \\frac{\\cos u}{u^{3}} \\,\\mathrm{d} u-\\dfrac{\\cos \\sqrt{\\frac{\\pi}{2}}}{2}-\\sqrt{\\dfrac{\\pi}{2}} \\cos \\sqrt{\\dfrac{\\pi}{2}}\\)",
        "keyFormulas": [
          "f(t)=\\int_{1}^{\\sqrt{t}} y\\left(\\cos\\frac{t}{y}-\\cos y\\right)\\,\\mathrm{d}y\n=t^2\\int_{\\sqrt{t}}^{t}\\frac{\\cos u}{u^3}\\,\\mathrm{d}u-\\int_{1}^{\\sqrt{t}} y\\cos y\\,\\mathrm{d}y.",
          "t=\\dfrac{\\pi}{2}",
          "f'\\left(\\frac{\\pi}{2}\\right)\n=\\pi \\int_{\\sqrt{\\frac{\\pi}{2}}}^{\\frac{\\pi}{2}} \\frac{\\cos u}{u^{3}} \\,\\mathrm{d} u\n-\\frac{\\cos \\sqrt{\\frac{\\pi}{2}}}{2}\n-\\sqrt{\\frac{\\pi}{2}} \\cos \\sqrt{\\frac{\\pi}{2}}."
        ],
        "guide": {
          "concept": "先看结构再选方法：复合函数配导数用换元，乘积中一项求导变简单用分部积分，有理函数先做代数分解。",
          "method": "写出换元变量与新上下限；反常积分先把瑕点或无穷端点改写成极限；变上限积分先用微积分基本定理求导。",
          "pitfall": "不定积分别漏常数C；分段函数的原函数在分段点还必须连续；反常积分算出原函数不等于已经收敛，必须看极限。",
          "extension": "相邻考法包括积分比较、面积体积、积分不等式和含参积分。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647953",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=17",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2021-15",
        "year": 2021,
        "number": 15,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "常微分方程",
        "question": "微分方程 \\(y'''-y=0\\) 的通解\n\\[y= \\underline{\\hspace{24em}}\n\\]",
        "answer": "\\(C_{1}e^{x}+e^{-\\frac{1}{2}x}\\left(C_{2}\\cos \\frac{\\sqrt{3}}{2}x+C_{3}\\sin \\frac{\\sqrt{3}}{2}x\\right)\\)",
        "keyFormulas": [
          "\\lambda^3-1=0,",
          "\\lambda_1=1,\\qquad \\lambda_{2,3}=-\\frac12\\pm\\frac{\\sqrt3}{2}i.",
          "y=C_1e^x+e^{-\\frac12x}\\left(C_2\\cos\\frac{\\sqrt3}{2}x+C_3\\sin\\frac{\\sqrt3}{2}x\\right)."
        ],
        "guide": {
          "concept": "先识别类型：可分离、一阶线性、伯努利、可降阶或二阶常系数。类型判断比直接试算更重要。",
          "method": "齐次部分先解特征方程；非齐次项按形式设特解，若与齐次解共振就乘 x 的适当次幂；最后用初值确定常数。",
          "pitfall": "设特解时多项式次数、指数因子和三角组合都要保留；共振次数漏乘 x 是高频错误。",
          "extension": "相邻考法包括微分方程建模、曲线族和积分方程。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647953",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=17",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2021-16",
        "year": 2021,
        "number": 16,
        "kind": "填空题",
        "subject": "线性代数",
        "topic": "行列式与矩阵运算",
        "question": "多项式\n\\[f(x)=\\left|\\begin{array}{cccc}\nx & x & 1 & 2x \\\\\n1 & x & 2 & -1 \\\\\n2 & 1 & x & 1 \\\\\n2 & -1 & 1 & x\n\\end{array}\\right|\n\\]\n中 \\(x^3\\) 项的系数为 \\(\\underline{\\hspace{6em}}\\)",
        "answer": "\\(-5\\)",
        "keyFormulas": [
          "x^3",
          "-x^3",
          "-4x^3",
          "-1-4=-5."
        ],
        "guide": {
          "concept": "矩阵题先看题目要求的是数值、秩、可逆性还是结构关系。矩阵乘法不能交换顺序。",
          "method": "优先使用初等变换、分块、A·A* = |A|E、可逆矩阵保持秩等性质，避免无目的展开。",
          "pitfall": "行变换与列变换对行列式的影响不同；矩阵等式中左右乘同一矩阵也要保持位置。",
          "extension": "相邻考法包括秩、方程组、特征值和相似。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647953",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=17",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2021-17",
        "year": 2021,
        "number": 17,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "极限计算",
        "question": "求极限\n\\[\\lim_{x \\to 0} \\left(\\frac{1+\\int_{0}^{x} e^{t^{2}} \\,\\mathrm{d} t}{e^{x}-1}-\\frac{1}{\\sin x}\\right).\n\\]",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "\\lim_{x\\to0}\\frac{\\sin x-x-\\int_0^x e^{t^2}\\,\\mathrm{d}t}{(e^x-1)\\sin x}.",
          "\\int_0^x e^{t^2}\\,\\mathrm{d}t\n=\\int_0^x\\left(1+t^2+o(t^2)\\right)\\,\\mathrm{d}t\n=x+\\frac13x^3+o(x^3),",
          "\\sin x=x-\\dfrac{x^3}{6}+o(x^3)",
          "e^x-1=x+o(x)",
          "\\frac12."
        ],
        "guide": {
          "concept": "极限题的关键不是一上来求导，而是先判断未定式类型，再选择等价无穷小、洛必达、泰勒、夹逼、单调有界或定积分定义。",
          "method": "第一行写清趋近方向和分子分母的量级；第二行处理主导项；第三行再约分或求导。遇到和式先试定积分定义，遇到递推先找单调性与界。",
          "pitfall": "连续使用洛必达会掩盖结构，也容易在不满足条件时误用。含绝对值、单侧极限和参数时必须分别检查。",
          "extension": "可联动复习无穷小比较、数列极限、函数极限和含参极限。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647953",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=17",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2021-18",
        "year": 2021,
        "number": 18,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "极限计算",
        "question": "已知\n\\[f(x)=\\frac{x|x|}{1+x},\n\\]\n求 \\(f(x)\\) 的凹凸性及渐近线。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "f(x)=\n\\begin{cases}\n\\dfrac{x^2}{1+x}, & x>0,\\\\[4pt]\n-\\dfrac{x^2}{1+x}, & x\\le 0.\n\\end{cases}",
          "f''(x)=\n\\begin{cases}\n\\dfrac{2}{(1+x)^3}, & x>0,\\\\[6pt]\n-\\dfrac{2}{(1+x)^3}, & x<0.\n\\end{cases}",
          "\\left(-\\infty,-1\\right)",
          "\\left(0,+\\infty\\right)",
          "f''(x)>0",
          "\\left(-1,0\\right)",
          "f''(x)<0",
          "\\lim_{x\\to-1}\\frac{x|x|}{1+x}=+\\infty,"
        ],
        "guide": {
          "concept": "极限题的关键不是一上来求导，而是先判断未定式类型，再选择等价无穷小、洛必达、泰勒、夹逼、单调有界或定积分定义。",
          "method": "第一行写清趋近方向和分子分母的量级；第二行处理主导项；第三行再约分或求导。遇到和式先试定积分定义，遇到递推先找单调性与界。",
          "pitfall": "连续使用洛必达会掩盖结构，也容易在不满足条件时误用。含绝对值、单侧极限和参数时必须分别检查。",
          "extension": "可联动复习无穷小比较、数列极限、函数极限和含参极限。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647953",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=17",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2021-19",
        "year": 2021,
        "number": 19,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "定积分的几何与物理应用",
        "question": "\\(f(x)\\) 满足\n\\[\\int \\frac{f(x)}{\\sqrt{x}} \\,\\mathrm{d}x=\\frac{1}{6}x^{2}-x+C,\n\\]\n\\(L\\) 为曲线 \\(y=f(x)\\)，其中 \\(4 \\le x \\le 9\\)。\\(L\\) 的弧长为 \\(s\\)，\\(L\\) 绕 \\(x\\) 轴旋转一周所形成的曲面的面积为 \\(A\\)，求 \\(s\\) 和 \\(A\\)。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "\\frac{f(x)}{\\sqrt{x}}=\\frac13x-1,",
          "f(x)=\\frac13x^{3/2}-x^{1/2},\\qquad\nf'(x)=\\frac12\\sqrt{x}-\\frac{1}{2\\sqrt{x}}.",
          "1+\\left(f'(x)\\right)^2=\\left(\\frac{\\sqrt{x}}{2}+\\frac{1}{2\\sqrt{x}}\\right)^2,",
          "s=\\int_4^9 \\sqrt{1+\\left(f'(x)\\right)^2}\\,\\mathrm{d}x\n=\\int_4^9\\left(\\frac{\\sqrt{x}}{2}+\\frac{1}{2\\sqrt{x}}\\right)\\,\\mathrm{d}x\n=\\frac{22}{3}.",
          "A=2\\pi\\int_4^9 f(x)\\sqrt{1+\\left(f'(x)\\right)^2}\\,\\mathrm{d}x\n=\\frac{425\\pi}{9}."
        ],
        "guide": {
          "concept": "先把几何量写成微元：面积、体积、弧长、压力或功，再决定沿哪个变量累加。",
          "method": "画图并标出典型小条；写微元公式；确定积分区间；最后检查结果量纲和正负。旋转体要先确认绕哪条轴。",
          "pitfall": "把半径、直径和到旋转轴的距离混淆，会让结果成倍出错；物理题还要统一单位。",
          "extension": "相邻考法包括相关变化率、最值和二重积分应用。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647953",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=17",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2021-20",
        "year": 2021,
        "number": 20,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "常微分方程",
        "question": "函数 \\(y=y(x)\\) 的微分方程\n\\[xy'-6y=-6,\n\\]\n满足 \\(y\\left(\\sqrt{3}\\right)=10\\)。\n求 \\(y(x)\\)；\n\\(P\\) 为曲线 \\(y=y(x)\\) 上的一点，曲线在点 \\(P\\) 的法线在 \\(y\\) 轴上的截距为 \\(I_y\\)。为使 \\(I_y\\) 最小，求 \\(P\\) 的坐标。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "y'-\\frac{6}{x}y=-\\frac{6}{x}.",
          "y=1+Cx^6.",
          "y(\\sqrt3)=10",
          "C=\\dfrac13",
          "y(x)=1+\\frac{x^6}{3}.",
          "P(x,y)",
          "y'=2x^5.",
          "-\\dfrac{1}{2x^5}"
        ],
        "guide": {
          "concept": "先识别类型：可分离、一阶线性、伯努利、可降阶或二阶常系数。类型判断比直接试算更重要。",
          "method": "齐次部分先解特征方程；非齐次项按形式设特解，若与齐次解共振就乘 x 的适当次幂；最后用初值确定常数。",
          "pitfall": "设特解时多项式次数、指数因子和三角组合都要保留；共振次数漏乘 x 是高频错误。",
          "extension": "相邻考法包括微分方程建模、曲线族和积分方程。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647953",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=17",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2021-21",
        "year": 2021,
        "number": 21,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "二重积分与区域变换",
        "question": "曲线\n\\[\\left(x^{2}+y^{2}\\right)^{2}=x^{2}-y^{2},\n\\]\n其中 \\(x \\ge 0,\\ y \\ge 0\\)，与 \\(x\\) 轴围成的区域为 \\(D\\)，求\n\\[\\iint_{D} xy \\,\\mathrm{d}x\\,\\mathrm{d}y.\n\\]",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "x=r\\cos\\theta,\\qquad y=r\\sin\\theta.",
          "r^4=r^2\\cos 2\\theta \\Longrightarrow r^2=\\cos 2\\theta.",
          "x\\ge0,\\ y\\ge0",
          "0\\le\\theta\\le\\dfrac{\\pi}{4}",
          "\\iint_D xy\\,\\mathrm{d}x\\,\\mathrm{d}y\n=\\int_0^{\\pi/4}\\int_0^{\\sqrt{\\cos 2\\theta}} r^3\\sin\\theta\\cos\\theta\\,\\mathrm{d}r\\,\\mathrm{d}\\theta.",
          "\\iint_D xy\\,\\mathrm{d}x\\,\\mathrm{d}y=\\frac{1}{48}."
        ],
        "guide": {
          "concept": "二重积分先画区域。很多计算错误不是积分不会，而是上下限描述了错误的区域。",
          "method": "标出边界交点；选择先 x 后 y 或先 y 后 x；圆、扇形和只含 x²+y² 的结构优先考虑极坐标，并补上雅可比 r。",
          "pitfall": "交换积分次序必须重新写全部上下限；利用对称性前先检查区域和被积函数奇偶性。",
          "extension": "相邻考法包括体积、质心、变换积分次序和参数区域。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647953",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=17",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2021-22",
        "year": 2021,
        "number": 22,
        "kind": "解答题",
        "subject": "线性代数",
        "topic": "特征值、特征向量与相似",
        "question": "设矩阵\n\\[\\boldsymbol{A}=\\begin{pmatrix}\n2 & 1 & 0 \\\\\n1 & 2 & 0 \\\\\n1 & a & b\n\\end{pmatrix}\n\\]\n仅有两个不同的特征值。若 \\(\\boldsymbol{A}\\) 相似于对角矩阵，求 \\(a,\\ b\\) 的值，并求可逆矩阵 \\(\\boldsymbol{P}\\)，使 \\(\\boldsymbol{P}^{-1}\\boldsymbol{A}\\boldsymbol{P}\\) 为对角矩阵。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "|\\lambda E-A|\n=\\begin{vmatrix}\n\\lambda-2 & -1 & 0 \\\\\n-1 & \\lambda-2 & 0 \\\\\n-1 & -a & \\lambda-b\n\\end{vmatrix}\n=(\\lambda-b)(\\lambda-3)(\\lambda-1).",
          "b=3",
          "3E-A=\n\\begin{pmatrix}\n1 & -1 & 0 \\\\\n-1 & 1 & 0 \\\\\n-1 & -a & 0\n\\end{pmatrix},",
          "a=-1",
          "\\alpha_1=\\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix},\\quad\n\\alpha_2=\\begin{pmatrix}0\\\\0\\\\1\\end{pmatrix}\n\\quad (\\lambda=3),",
          "\\alpha_3=\\begin{pmatrix}-1\\\\1\\\\1\\end{pmatrix}\n\\quad (\\lambda=1).",
          "P=\\left(\\alpha_1,\\alpha_2,\\alpha_3\\right)\n=\\begin{pmatrix}\n1 & 0 & -1 \\\\\n1 & 0 & 1 \\\\\n0 & 1 & 1\n\\end{pmatrix},",
          "P^{-1}AP=\\operatorname{diag}(3,3,1)."
        ],
        "guide": {
          "concept": "先用特征方程找特征值，再解 (A-λE)x=0。能否对角化取决于线性无关特征向量是否足够。",
          "method": "利用迹、行列式和已知特征向量简化；分别求每个特征值的特征子空间维数；按列组成 P，并保持特征值顺序一致。",
          "pitfall": "重特征值不等于一定不能对角化；相似矩阵特征值相同，但反过来不一定相似。",
          "extension": "相邻考法包括矩阵幂、二次型正交变换和实对称矩阵。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647953",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=17",
        "videoExtraUrl": ""
      }
    ]
  },
  {
    "year": 2022,
    "videoPage": 20,
    "items": [
      {
        "id": "math2-2022-1",
        "year": 2022,
        "number": 1,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "等价无穷小与泰勒展开",
        "question": "若当 \\(x \\to 0\\) 时，\\(a\\left( x \\right), \\beta\\left( x \\right)\\) 是非零无穷小量，则以下的命题中，\n① 若 \\(a\\left( x \\right) \\sim \\beta\\left( x \\right)\\)，则 \\(a^{2}\\left( x \\right) \\sim \\beta^{2}\\left( x \\right)\\)；\n② 若 \\(a^{2}\\left( x \\right) \\sim \\beta^{2}\\left( x \\right)\\)，则 \\(a\\left( x \\right) \\sim \\beta\\left( x \\right)\\)；\n③ 若 \\(a\\left( x \\right) \\sim \\beta\\left( x \\right)\\)，则 \\(a\\left( x \\right) - \\beta\\left( x \\right) = o\\left( a\\left( x \\right) \\right)\\)；\n④ 若 \\(a\\left( x \\right) - \\beta\\left( x \\right) = o\\left( a\\left( x \\right) \\right)\\)，则 \\(a\\left( x \\right) \\sim \\beta\\left( x \\right)\\)，\n真命题的序号为 \\(\\left( \\ \\right)\\)\nA. \\(①③\\)\nB. \\(①④\\)\nC. \\(①③④\\)\nD. \\(②③④\\)",
        "answer": "\\(\\mathrm{C}\\)",
        "keyFormulas": [
          "a(x)=-\\beta(x)",
          "\\frac{a-\\beta}{a}=1-\\frac{\\beta}{a}\\to0",
          "\\frac{\\beta}{a}=1-\\frac{a-\\beta}{a}\\to1"
        ],
        "guide": {
          "concept": "先看每一项在趋近点附近的最低非零次幂。老师在视频里强调：比较阶数时系数通常不重要，但正负号、幂次和趋近条件绝不能口算带过。",
          "method": "把根式、对数、指数、三角函数逐个换成标准等价式；若相减造成低阶项抵消，就立即改用泰勒展开，写到第一个不为零的项。最后只比较幂指数。",
          "pitfall": "最容易把 1-cos x 与 cos x-1 的符号写反，或在加减结构中违规直接做等价替换。先确认替换对象整体趋于0。",
          "extension": "同一知识点还会考极限值、无穷小阶数排序、参数确定和泰勒系数。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647914",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=20",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2022-2",
        "year": 2022,
        "number": 2,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "一元积分",
        "question": "\\(\\int_{0}^{2} \\mathrm{d}y \\int_{y}^{2} \\frac{y}{\\sqrt{\\left( 1 + x^{3} \\right)}} \\mathrm{~d}x = \\left( \\ \\right)\\)\nA. \\(\\frac{\\sqrt{2}}{6}\\)\nB. \\(\\frac{1}{3}\\)\nC. \\(\\frac{\\sqrt{2}}{3}\\)\nD. \\(\\frac{2}{3}\\)",
        "answer": "\\(\\mathrm{D}\\)",
        "keyFormulas": [
          "0\\le y\\le x\\le2",
          "\\int_0^2 \\mathrm{d}y \\int_y^2 \\frac{y}{\\sqrt{1+x^3}}\\,\\mathrm{d}x\n=\\int_0^2 \\mathrm{d}x \\int_0^x \\frac{y}{\\sqrt{1+x^3}}\\,\\mathrm{d}y\n=\\frac12\\int_0^2 \\frac{x^2}{\\sqrt{1+x^3}}\\,\\mathrm{d}x.",
          "u=1+x^3",
          "\\frac23"
        ],
        "guide": {
          "concept": "先看结构再选方法：复合函数配导数用换元，乘积中一项求导变简单用分部积分，有理函数先做代数分解。",
          "method": "写出换元变量与新上下限；反常积分先把瑕点或无穷端点改写成极限；变上限积分先用微积分基本定理求导。",
          "pitfall": "不定积分别漏常数C；分段函数的原函数在分段点还必须连续；反常积分算出原函数不等于已经收敛，必须看极限。",
          "extension": "相邻考法包括积分比较、面积体积、积分不等式和含参积分。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647914",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=20",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2022-3",
        "year": 2022,
        "number": 3,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "单调性、极值与凹凸性",
        "question": "设 \\(f\\left( x \\right)\\) 在 \\(x = x_{0}\\) 处有二阶导数，则 \\(\\left( \\ \\right)\\)\nA. 当 \\(f\\left( x \\right)\\) 在 \\(x_{0}\\) 的某邻域内单调增加时，\\(f^{\\prime}\\left( x_{0} \\right) > 0\\)\nB. 当 \\(f^{\\prime}\\left( x_{0} \\right) > 0\\) 时，\\(f\\left( x \\right)\\) 在 \\(x_{0}\\) 的某邻域内单调增加\nC. 当 \\(f\\left( x \\right)\\) 在 \\(x_{0}\\) 的某邻域内是凹函数时，\\(f^{\\prime\\prime}\\left( x_{0} \\right) > 0\\)\nD. 当 \\(f^{\\prime\\prime}\\left( x_{0} \\right) > 0\\) 时，\\(f\\left( x \\right)\\) 在 \\(x_{0}\\) 的某邻域内是凹函数",
        "answer": "\\(\\mathrm{B}\\)",
        "keyFormulas": [
          "\\mathrm{B}",
          "\\mathrm{A}",
          "f(x)=x^3",
          "x_0=0",
          "\\mathrm{C}",
          "\\mathrm{D}",
          "f''(x_0)>0"
        ],
        "guide": {
          "concept": "极值看一阶导数变号，拐点看凹凸性改变。老师反复提醒：题目给的是函数图还是导函数图，必须先读清。",
          "method": "求定义域；求一阶导数并列符号表；极值再检查端点。拐点用二阶导数变号验证，不能只凭 f''(x)=0。",
          "pitfall": "驻点不一定是极值点，二阶导数为0也不一定是拐点。最值题不要漏掉区间端点。",
          "extension": "相邻考法包括不等式证明、最优化、切线截距和函数作图。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647914",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=20",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2022-4",
        "year": 2022,
        "number": 4,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "多元函数微分",
        "question": "已知 \\(f\\left( t \\right)\\) 连续，令\n\\(F\\left( x,y \\right) = \\int_{0}^{x-y} \\left( x - y - t \\right) f\\left( t \\right) \\mathrm{~d}t\\)\n则 \\(\\left( \\ \\right)\\)\nA. \\(\\frac{\\partial F}{\\partial x} = \\frac{\\partial F}{\\partial y},\\ \\frac{\\partial^{2}F}{\\partial x^{2}} = \\frac{\\partial^{2}F}{\\partial y^{2}}\\)\nB. \\(\\frac{\\partial F}{\\partial x} = \\frac{\\partial F}{\\partial y},\\ \\frac{\\partial^{2}F}{\\partial x^{2}} = - \\frac{\\partial^{2}F}{\\partial y^{2}}\\)\nC. \\(\\frac{\\partial F}{\\partial x} = - \\frac{\\partial F}{\\partial y},\\ \\frac{\\partial^{2}F}{\\partial x^{2}} = \\frac{\\partial^{2}F}{\\partial y^{2}}\\)\nD. \\(\\frac{\\partial F}{\\partial x} = - \\frac{\\partial F}{\\partial y},\\ \\frac{\\partial^{2}F}{\\partial x^{2}} = - \\frac{\\partial^{2}F}{\\partial y^{2}}\\)",
        "answer": "\\(\\mathrm{C}\\)",
        "keyFormulas": [
          "s=x-y",
          "F(x,y)=\\int_0^s (s-t)f(t)\\,\\mathrm{d}t,",
          "x,y",
          "\\frac{\\partial F}{\\partial x}=F_s,\\qquad \\frac{\\partial F}{\\partial y}=-F_s,",
          "\\frac{\\partial^2 F}{\\partial x^2}=\\frac{\\partial^2 F}{\\partial y^2}=f(x-y)."
        ],
        "guide": {
          "concept": "多元题先区分偏导数、方向导数、全微分和复合函数链式法则。偏导存在不自动推出连续或可微。",
          "method": "画依赖关系：外层变量对中间变量求偏导，中间变量再对自变量求导；每条路径的乘积相加。指定点最后再代入。",
          "pitfall": "二阶混合偏导只有在相应连续条件下才能随意交换次序；沿坐标轴极限不能代替二元极限。",
          "extension": "相邻考法包括极值、条件极值、切平面与法线。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647914",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=20",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2022-5",
        "year": 2022,
        "number": 5,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "等价无穷小与泰勒展开",
        "question": "设 \\(p\\) 为常数，若反常积分\n\\(\\int_{0}^{1} \\frac{\\ln x}{x^{p}\\left( 1-x \\right)^{1-p}} \\mathrm{~d}x\\)\n收敛，则 \\(p\\) 的取值范围是 \\(\\left( \\ \\right)\\)\nA. \\(\\left( -1,1 \\right)\\)\nB. \\(\\left( -1,2 \\right)\\)\nC. \\(\\left( -\\infty,1 \\right)\\)\nD. \\(\\left( -\\infty,2 \\right)\\)",
        "answer": "\\(\\mathrm{A}\\)",
        "keyFormulas": [
          "x=0",
          "\\frac{\\ln x}{x^p}",
          "p<1",
          "x=1",
          "\\ln x\\sim-(1-x)",
          "-(1-x)^p",
          "p>-1",
          "-1<p<1"
        ],
        "guide": {
          "concept": "先看每一项在趋近点附近的最低非零次幂。老师在视频里强调：比较阶数时系数通常不重要，但正负号、幂次和趋近条件绝不能口算带过。",
          "method": "把根式、对数、指数、三角函数逐个换成标准等价式；若相减造成低阶项抵消，就立即改用泰勒展开，写到第一个不为零的项。最后只比较幂指数。",
          "pitfall": "最容易把 1-cos x 与 cos x-1 的符号写反，或在加减结构中违规直接做等价替换。先确认替换对象整体趋于0。",
          "extension": "同一知识点还会考极限值、无穷小阶数排序、参数确定和泰勒系数。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647914",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=20",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2022-6",
        "year": 2022,
        "number": 6,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "极限计算",
        "question": "设数列 \\(\\left\\{ x_{n} \\right\\}\\) 满足 \\(- \\frac{\\pi}{2} \\le x_{n} \\le \\frac{\\pi}{2}\\)，则 \\(\\left( \\ \\right)\\)\nA. 若 \\(\\lim_{n \\to \\infty} \\cos\\left( \\sin x_{n} \\right)\\) 存在，则 \\(\\lim_{n \\to \\infty} x_{n}\\) 存在\nB. 若 \\(\\lim_{n \\to \\infty} \\sin\\left( \\cos x_{n} \\right)\\) 存在，则 \\(\\lim_{n \\to \\infty} x_{n}\\) 存在\nC. 若 \\(\\lim_{n \\to \\infty} \\cos\\left( \\sin x_{n} \\right)\\) 存在，则 \\(\\lim_{n \\to \\infty} \\sin x_{n}\\) 存在，但 \\(\\lim_{n \\to \\infty} x_{n}\\) 不一定存在\nD. 若 \\(\\lim_{n \\to \\infty} \\sin\\left( \\cos x_{n} \\right)\\) 存在，则 \\(\\lim_{n \\to \\infty} \\cos x_{n}\\) 存在，但 \\(\\lim_{n \\to \\infty} x_{n}\\) 不一定存在",
        "answer": "\\(\\mathrm{D}\\)",
        "keyFormulas": [
          "\\cos x_n\\in[0,1]",
          "\\sin x",
          "[0,1]",
          "\\sin(\\cos x_n)",
          "\\cos x_n",
          "x_n",
          "x_n=(-1)^n\\frac\\pi2",
          "\\mathrm{D}"
        ],
        "guide": {
          "concept": "极限题的关键不是一上来求导，而是先判断未定式类型，再选择等价无穷小、洛必达、泰勒、夹逼、单调有界或定积分定义。",
          "method": "第一行写清趋近方向和分子分母的量级；第二行处理主导项；第三行再约分或求导。遇到和式先试定积分定义，遇到递推先找单调性与界。",
          "pitfall": "连续使用洛必达会掩盖结构，也容易在不满足条件时误用。含绝对值、单侧极限和参数时必须分别检查。",
          "extension": "可联动复习无穷小比较、数列极限、函数极限和含参极限。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647914",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=20",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2022-7",
        "year": 2022,
        "number": 7,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "综合应用",
        "question": "若\n\\(I_{1} = \\int_{0}^{1} \\frac{x}{2\\left( 1 + \\cos x \\right)} \\mathrm{~d}x,\\quad I_{2} = \\int_{0}^{1} \\frac{\\ln\\left( 1 + x \\right)}{1 + \\cos x} \\mathrm{~d}x,\\quad I_{3} = \\int_{0}^{1} \\frac{2x}{1 + \\sin x} \\mathrm{~d}x\\)\n则 \\(\\left( \\ \\right)\\)\nA. \\(I_{1} < I_{2} < I_{3}\\)\nB. \\(I_{2} < I_{1} < I_{3}\\)\nC. \\(I_{1} < I_{3} < I_{2}\\)\nD. \\(I_{3} < I_{2} < I_{1}\\)",
        "answer": "\\(\\mathrm{A}\\)",
        "keyFormulas": [
          "\\ln(1+x)>\\frac x2\\ (0<x<1)",
          "I_2>I_1",
          "\\ln(1+x)<x",
          "1+\\cos x>1",
          "1+\\sin x<2",
          "\\frac{\\ln(1+x)}{1+\\cos x}<x<\\frac{2x}{1+\\sin x},",
          "I_2<I_3",
          "I_1<I_2<I_3"
        ],
        "guide": {
          "concept": "先判断题目属于高等数学还是线性代数，并把题干中的已知条件、所求对象和限制范围分别圈出。",
          "method": "选择最直接的定义或定理，先写公式，再代条件，保留关键中间步骤，最后用答案反查题意。",
          "pitfall": "不要在读题未完成时开始心算；符号、定义域、单侧条件和矩阵乘法顺序都是高频失分点。",
          "extension": "做完后把本题归入对应专题，再找一道同方法不同外观的题复做。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647914",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=20",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2022-8",
        "year": 2022,
        "number": 8,
        "kind": "单项选择题",
        "subject": "线性代数",
        "topic": "特征值、特征向量与相似",
        "question": "设矩阵\n\\(\\boldsymbol{A} = \\left( \\begin{array}{ccc} 1 & 0 & 0 \\\\ 0 & -1 & 0 \\\\ 0 & 0 & 0 \\end{array} \\right)\\)\n则 \\(\\boldsymbol{A}\\) 的特征值为 \\(1,-1,0\\) 的充分必要条件是 \\(\\left( \\ \\right)\\)\nA. 存在可逆矩阵 \\(\\boldsymbol{P}, \\boldsymbol{Q}\\)，使得 \\(\\boldsymbol{A} = \\boldsymbol{P}\\boldsymbol{\\Lambda}\\boldsymbol{Q}\\)\nB. 存在可逆矩阵 \\(\\boldsymbol{P}\\)，使得 \\(\\boldsymbol{A} = \\boldsymbol{P}\\boldsymbol{\\Lambda}\\boldsymbol{P}^{-1}\\)\nC. 存在正交矩阵 \\(\\boldsymbol{Q}\\)，使得 \\(\\boldsymbol{A} = \\boldsymbol{Q}\\boldsymbol{\\Lambda}\\boldsymbol{Q}^{-1}\\)\nD. 存在可逆矩阵 \\(\\boldsymbol{P}\\)，使得 \\(\\boldsymbol{A} = \\boldsymbol{P}\\boldsymbol{\\Lambda}\\boldsymbol{P}^{T}\\)",
        "answer": "\\(\\mathrm{B}\\)",
        "keyFormulas": [
          "1,-1,0",
          "\\Lambda=\\operatorname{diag}(1,-1,0)",
          "A=P\\Lambda P^{-1}."
        ],
        "guide": {
          "concept": "先用特征方程找特征值，再解 (A-λE)x=0。能否对角化取决于线性无关特征向量是否足够。",
          "method": "利用迹、行列式和已知特征向量简化；分别求每个特征值的特征子空间维数；按列组成 P，并保持特征值顺序一致。",
          "pitfall": "重特征值不等于一定不能对角化；相似矩阵特征值相同，但反过来不一定相似。",
          "extension": "相邻考法包括矩阵幂、二次型正交变换和实对称矩阵。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647914",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=20",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2022-9",
        "year": 2022,
        "number": 9,
        "kind": "单项选择题",
        "subject": "线性代数",
        "topic": "线性方程组",
        "question": "设矩阵\n\\(\\boldsymbol{A} = \\left( \\begin{array}{ccc} 1 & 1 & 1 \\\\ 1 & a & a^{2} \\\\ 1 & b & b^{2} \\end{array} \\right),\\quad \\boldsymbol{b} = \\left( \\begin{array}{c} 1 \\\\ 2 \\\\ 4 \\end{array} \\right)\\)\n则线性方程组 \\(\\boldsymbol{A}\\boldsymbol{x} = \\boldsymbol{b}\\) 的解的情况为 \\(\\left( \\ \\right)\\)\nA. 无解\nB. 有解\nC. 有无穷多解或无解\nD. 有唯一解或无解",
        "answer": "\\(\\mathrm{D}\\)",
        "keyFormulas": [
          "\\det A=(a-1)(b-1)(b-a)\\ne0"
        ],
        "guide": {
          "concept": "方程组先比较系数矩阵秩 r(A) 与增广矩阵秩 r(A,b)，再讨论无解、唯一解或无穷多解。",
          "method": "对增广矩阵做初等行变换；确定主元和自由变量；非齐次通解=一个特解+齐次方程通解。",
          "pitfall": "有参数时秩可能分情况变化；不要只看行列式为0就直接断言无解。",
          "extension": "相邻考法包括公共解、同解方程组与矩阵秩。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647914",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=20",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2022-10",
        "year": 2022,
        "number": 10,
        "kind": "单项选择题",
        "subject": "线性代数",
        "topic": "向量组与线性相关",
        "question": "设\n\\(\\boldsymbol{a}_{1} = \\left( \\begin{array}{c} \\lambda \\\\ 1 \\\\ 1 \\end{array} \\right),\\quad \\boldsymbol{a}_{2} = \\left( \\begin{array}{c} 1 \\\\ \\lambda \\\\ 1 \\end{array} \\right),\\quad \\boldsymbol{a}_{3} = \\left( \\begin{array}{c} 1 \\\\ 1 \\\\ \\lambda \\end{array} \\right),\\quad \\boldsymbol{a}_{4} = \\left( \\begin{array}{c} 1 \\\\ \\lambda \\\\ \\lambda^{2} \\end{array} \\right)\\)\n若 \\(\\boldsymbol{a}_{1}, \\boldsymbol{a}_{2}, \\boldsymbol{a}_{3}\\) 与 \\(\\boldsymbol{a}_{1}, \\boldsymbol{a}_{2}, \\boldsymbol{a}_{4}\\) 等价，则 \\(\\lambda\\) 的取值范围是 \\(\\left( \\ \\right)\\)\nA. \\(\\left\\{ 0,1 \\right\\}\\)\nB. \\(\\left\\{ \\lambda \\mid \\lambda \\in \\mathbb{R},\\ \\lambda \\ne -2 \\right\\}\\)\nC. \\(\\left\\{ \\lambda \\mid \\lambda \\in \\mathbb{R},\\ \\lambda \\ne -1,\\ \\lambda \\ne -2 \\right\\}\\)\nD. \\(\\left\\{ \\lambda \\mid \\lambda \\in \\mathbb{R},\\ \\lambda \\ne -1 \\right\\}\\)",
        "answer": "\\(\\mathrm{C}\\)",
        "keyFormulas": [
          "\\det(\\boldsymbol{a}_{1},\\boldsymbol{a}_{2},\\boldsymbol{a}_{3})=(\\lambda-1)^2(\\lambda+2),",
          "\\det(\\boldsymbol{a}_{1},\\boldsymbol{a}_{2},\\boldsymbol{a}_{4})=(\\lambda-1)^2(\\lambda+1)^2.",
          "\\lambda=-1,-2",
          "\\lambda=1",
          "\\lambda\\ne-1,-2"
        ],
        "guide": {
          "concept": "线性相关的本质是能否找到不全为0的系数组合成零向量；秩等于最大线性无关组所含向量数。",
          "method": "把向量按列组成矩阵并做行化简；主元列给出最大无关组；自由变量对应齐次方程基础解系。",
          "pitfall": "不要把行化简后的列直接当成原向量组的最大无关组；选列应回到原矩阵对应位置。",
          "extension": "相邻考法包括线性表示、秩不等式和解空间维数。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647914",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=20",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2022-11",
        "year": 2022,
        "number": 11,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "极限计算",
        "question": "\\(\\lim_{x \\to 0} \\left( \\frac{1 + e^{x}}{2} \\right)^{\\cot x} = \\underline{\\hspace{4em}}\\)",
        "answer": "\\(\\sqrt{e}\\)",
        "keyFormulas": [
          "\\ln L=\\lim_{x\\to0}\\cot x\\cdot\\ln\\left(\\frac{1+e^x}{2}\\right)=\\lim_{x\\to0}\\frac{\\ln\\left(\\frac{1+e^x}{2}\\right)}{\\tan x}.",
          "\\ln\\left(\\frac{1+e^x}{2}\\right)\\sim \\frac x2",
          "\\tan x\\sim x",
          "\\ln L=\\frac12",
          "L=\\sqrt e"
        ],
        "guide": {
          "concept": "极限题的关键不是一上来求导，而是先判断未定式类型，再选择等价无穷小、洛必达、泰勒、夹逼、单调有界或定积分定义。",
          "method": "第一行写清趋近方向和分子分母的量级；第二行处理主导项；第三行再约分或求导。遇到和式先试定积分定义，遇到递推先找单调性与界。",
          "pitfall": "连续使用洛必达会掩盖结构，也容易在不满足条件时误用。含绝对值、单侧极限和参数时必须分别检查。",
          "extension": "可联动复习无穷小比较、数列极限、函数极限和含参极限。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647914",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=20",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2022-12",
        "year": 2022,
        "number": 12,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "常微分方程",
        "question": "已知函数 \\(y = y\\left( x \\right)\\) 由方程\n\\(x^{2} + xy + y^{3} = 3\\)\n确定，则 \\(y^{\\prime\\prime}\\left( 1 \\right) = \\underline{\\hspace{4em}}\\)",
        "answer": "\\(- \\frac{31}{32}\\)",
        "keyFormulas": [
          "1+y+y^3=3",
          "y(1)=1",
          "x^2+xy+y^3=3",
          "2x+y+(x+3y^2)y'=0.",
          "(1,1)",
          "y'(1)=-\\frac34",
          "x=1,y=1,y'=-\\frac34",
          "y''(1)=-\\frac{31}{32}"
        ],
        "guide": {
          "concept": "先识别类型：可分离、一阶线性、伯努利、可降阶或二阶常系数。类型判断比直接试算更重要。",
          "method": "齐次部分先解特征方程；非齐次项按形式设特解，若与齐次解共振就乘 x 的适当次幂；最后用初值确定常数。",
          "pitfall": "设特解时多项式次数、指数因子和三角组合都要保留；共振次数漏乘 x 是高频错误。",
          "extension": "相邻考法包括微分方程建模、曲线族和积分方程。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647914",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=20",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2022-13",
        "year": 2022,
        "number": 13,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "一元积分",
        "question": "\\(\\int_{0}^{1} \\frac{2x + 3}{x^{2} - x + 1} \\mathrm{~d}x = \\underline{\\hspace{4em}}\\)",
        "answer": "\\(\\frac{8\\sqrt{3}\\pi}{9}\\)",
        "keyFormulas": [
          "2x+3=(2x-1)+4",
          "x^2-x+1=\\left(x-\\frac12\\right)^2+\\frac34.",
          "\\frac{8\\sqrt3\\pi}{9}"
        ],
        "guide": {
          "concept": "先看结构再选方法：复合函数配导数用换元，乘积中一项求导变简单用分部积分，有理函数先做代数分解。",
          "method": "写出换元变量与新上下限；反常积分先把瑕点或无穷端点改写成极限；变上限积分先用微积分基本定理求导。",
          "pitfall": "不定积分别漏常数C；分段函数的原函数在分段点还必须连续；反常积分算出原函数不等于已经收敛，必须看极限。",
          "extension": "相邻考法包括积分比较、面积体积、积分不等式和含参积分。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647914",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=20",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2022-14",
        "year": 2022,
        "number": 14,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "常微分方程",
        "question": "微分方程\n\\(y^{\\prime\\prime\\prime} - 2y^{\\prime\\prime} + 5y^{\\prime} = 0\\)\n的通解为 \\(y\\left( x \\right) = \\underline{\\hspace{10em}}\\)",
        "answer": "\\(C_{1} + e^{x}\\left( C_{2}\\cos 2x + C_{3}\\sin 2x \\right)\\)",
        "keyFormulas": [
          "r^3-2r^2+5r=0",
          "r(r^2-2r+5)=0",
          "0,1\\pm2i",
          "y=C_1+e^x\\left(C_2\\cos2x+C_3\\sin2x\\right)."
        ],
        "guide": {
          "concept": "先识别类型：可分离、一阶线性、伯努利、可降阶或二阶常系数。类型判断比直接试算更重要。",
          "method": "齐次部分先解特征方程；非齐次项按形式设特解，若与齐次解共振就乘 x 的适当次幂；最后用初值确定常数。",
          "pitfall": "设特解时多项式次数、指数因子和三角组合都要保留；共振次数漏乘 x 是高频错误。",
          "extension": "相邻考法包括微分方程建模、曲线族和积分方程。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647914",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=20",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2022-15",
        "year": 2022,
        "number": 15,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "二重积分与区域变换",
        "question": "已知曲线 \\(L\\) 的极坐标方程为\n\\(r = \\sin 3\\theta \\quad \\left( 0 \\le \\theta \\le \\frac{\\pi}{3} \\right)\\)\n则 \\(L\\) 围成的有界区域的面积为 \\(\\underline{\\hspace{4em}}\\)",
        "answer": "\\(\\frac{\\pi}{12}\\)",
        "keyFormulas": [
          "S=\\frac12\\int_0^{\\pi/3} r^2\\,\\mathrm{d}\\theta=\\frac12\\int_0^{\\pi/3}\\sin^2 3\\theta\\,\\mathrm{d}\\theta=\\frac{\\pi}{12}."
        ],
        "guide": {
          "concept": "二重积分先画区域。很多计算错误不是积分不会，而是上下限描述了错误的区域。",
          "method": "标出边界交点；选择先 x 后 y 或先 y 后 x；圆、扇形和只含 x²+y² 的结构优先考虑极坐标，并补上雅可比 r。",
          "pitfall": "交换积分次序必须重新写全部上下限；利用对称性前先检查区域和被积函数奇偶性。",
          "extension": "相邻考法包括体积、质心、变换积分次序和参数区域。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647914",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=20",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2022-16",
        "year": 2022,
        "number": 16,
        "kind": "填空题",
        "subject": "线性代数",
        "topic": "行列式与矩阵运算",
        "question": "设 \\(\\boldsymbol{A}\\) 为 \\(3\\) 阶矩阵，交换 \\(\\boldsymbol{A}\\) 的第 \\(2\\) 行和第 \\(3\\) 行，再将第 \\(2\\) 列的 \\(-1\\) 倍加到第 \\(1\\) 列，得到矩阵\n\\(\\left( \\begin{array}{ccc} -2 & 1 & -1 \\\\ 1 & -1 & 0 \\\\ -1 & 0 & 0 \\end{array} \\right)\\)\n则 \\(\\operatorname{tr}\\left( \\boldsymbol{A}^{-1} \\right) = \\underline{\\hspace{4em}}\\)",
        "answer": "\\(-1\\)",
        "keyFormulas": [
          "B=P_1AP_2",
          "A^{-1}=P_2B^{-1}P_1.",
          "A^{-1}=\\begin{pmatrix}0&-1&0\\\\0&0&-1\\\\-1&1&-1\\end{pmatrix},",
          "\\operatorname{tr}(A^{-1})=-1"
        ],
        "guide": {
          "concept": "矩阵题先看题目要求的是数值、秩、可逆性还是结构关系。矩阵乘法不能交换顺序。",
          "method": "优先使用初等变换、分块、A·A* = |A|E、可逆矩阵保持秩等性质，避免无目的展开。",
          "pitfall": "行变换与列变换对行列式的影响不同；矩阵等式中左右乘同一矩阵也要保持位置。",
          "extension": "相邻考法包括秩、方程组、特征值和相似。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647914",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=20",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2022-17",
        "year": 2022,
        "number": 17,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "极限计算",
        "question": "已知函数 \\(f\\left( x \\right)\\) 在 \\(x = 1\\) 处可导，且\n\\(\\lim_{x \\to 0} \\frac{f\\left( e^{x^{2}} \\right) - 3f\\left( 1 + \\sin^{2}x \\right)}{x^{2}} = 2\\)\n求 \\(f^{\\prime}\\left( 1 \\right)\\).",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "f(1)-3f(1)=0",
          "f(1)=0",
          "\\lim_{x\\to0}\\frac{f(e^{x^2})-f(1)}{x^2}=f'(1),\\qquad\n\\lim_{x\\to0}\\frac{f(1+\\sin^2x)-f(1)}{x^2}=f'(1).",
          "f'(1)-3f'(1)=2,",
          "f'(1)=-1"
        ],
        "guide": {
          "concept": "极限题的关键不是一上来求导，而是先判断未定式类型，再选择等价无穷小、洛必达、泰勒、夹逼、单调有界或定积分定义。",
          "method": "第一行写清趋近方向和分子分母的量级；第二行处理主导项；第三行再约分或求导。遇到和式先试定积分定义，遇到递推先找单调性与界。",
          "pitfall": "连续使用洛必达会掩盖结构，也容易在不满足条件时误用。含绝对值、单侧极限和参数时必须分别检查。",
          "extension": "可联动复习无穷小比较、数列极限、函数极限和含参极限。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647914",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=20",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2022-18",
        "year": 2022,
        "number": 18,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "常微分方程",
        "question": "设函数 \\(y\\left( x \\right)\\) 是微分方程\n\\(2x y^{\\prime} - 4y = 2\\ln x - 1\\)\n的满足条件\n\\(y\\left( 1 \\right) = \\frac{1}{4}\\)\n的解，求曲线 \\(y = y\\left( x \\right)\\) 在 \\(\\left[ 1,e \\right]\\) 上的弧长.",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "y'-\\frac2x y=\\frac{2\\ln x-1}{2x},",
          "x^{-2}",
          "y(x)=\\frac{x^2}{4}-\\frac12\\ln x.",
          "y'(x)=\\frac x2-\\frac{1}{2x},\\qquad\n1+(y')^2=\\left(\\frac x2+\\frac{1}{2x}\\right)^2.",
          "s=\\int_1^e\\left(\\frac x2+\\frac{1}{2x}\\right)\\,\\mathrm{d}x=\\frac{e^2+1}{4}."
        ],
        "guide": {
          "concept": "先识别类型：可分离、一阶线性、伯努利、可降阶或二阶常系数。类型判断比直接试算更重要。",
          "method": "齐次部分先解特征方程；非齐次项按形式设特解，若与齐次解共振就乘 x 的适当次幂；最后用初值确定常数。",
          "pitfall": "设特解时多项式次数、指数因子和三角组合都要保留；共振次数漏乘 x 是高频错误。",
          "extension": "相邻考法包括微分方程建模、曲线族和积分方程。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647914",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=20",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2022-19",
        "year": 2022,
        "number": 19,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "二重积分与区域变换",
        "question": "已知平面区域\n\\(D = \\left\\{ \\left( x,y \\right) \\mid y - 2 \\le x \\le \\sqrt{4 - y^{2}},\\ 0 \\le y \\le 2 \\right\\}\\)\n计算\n\\(I = \\iint_{D} \\frac{\\left( x-y \\right)^{2}}{x^{2} + y^{2}} \\mathrm{~d}x \\mathrm{~d}y\\)",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "r=2",
          "x=y-2",
          "r=\\frac{2}{\\sin\\theta-\\cos\\theta}.",
          "\\frac{(x-y)^2}{x^2+y^2}=(\\cos\\theta-\\sin\\theta)^2.",
          "0\\le\\theta\\le\\frac\\pi2",
          "\\frac\\pi2\\le\\theta\\le\\pi",
          "I=2\\int_0^{\\pi/2}(1-\\sin2\\theta)\\,\\mathrm{d}\\theta+2\\int_{\\pi/2}^{\\pi}\\mathrm{d}\\theta=2\\pi-2."
        ],
        "guide": {
          "concept": "二重积分先画区域。很多计算错误不是积分不会，而是上下限描述了错误的区域。",
          "method": "标出边界交点；选择先 x 后 y 或先 y 后 x；圆、扇形和只含 x²+y² 的结构优先考虑极坐标，并补上雅可比 r。",
          "pitfall": "交换积分次序必须重新写全部上下限；利用对称性前先检查区域和被积函数奇偶性。",
          "extension": "相邻考法包括体积、质心、变换积分次序和参数区域。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647914",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=20",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2022-20",
        "year": 2022,
        "number": 20,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "多元函数微分",
        "question": "已知可微函数 \\(f\\left( u,v \\right)\\) 满足\n\\(\\frac{\\partial f\\left( u,v \\right)}{\\partial u} - \\frac{\\partial f\\left( u,v \\right)}{\\partial v} = 2\\left( u-v \\right)e^{-\\left( u+v \\right)}\\)\n且\n\\(f\\left( u,0 \\right) = u^{2}e^{-u}\\)\n（I） 记 \\(g\\left( x,y \\right) = f\\left( x,y-x \\right)\\)，求 \\(\\frac{\\partial g\\left( x,y \\right)}{\\partial x}\\)；\n（II） 求 \\(f\\left( u,v \\right)\\) 的表达式与极值.",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "g(x,y)=f(x,y-x)",
          "\\frac{\\partial g}{\\partial x}\n=\\frac{\\partial f}{\\partial u}-\\frac{\\partial f}{\\partial v}\n=2\\bigl(x-(y-x)\\bigr)e^{-y}=(4x-2y)e^{-y}.",
          "g(x,y)=2x(x-y)e^{-y}+\\varphi(y).",
          "u=x,\\ v=y-x",
          "f(u,0)=u^2e^{-u}",
          "\\varphi(u)=u^2e^{-u}",
          "f(u,v)=(u^2+v^2)e^{-(u+v)}.",
          "(0,0)"
        ],
        "guide": {
          "concept": "多元题先区分偏导数、方向导数、全微分和复合函数链式法则。偏导存在不自动推出连续或可微。",
          "method": "画依赖关系：外层变量对中间变量求偏导，中间变量再对自变量求导；每条路径的乘积相加。指定点最后再代入。",
          "pitfall": "二阶混合偏导只有在相应连续条件下才能随意交换次序；沿坐标轴极限不能代替二元极限。",
          "extension": "相邻考法包括极值、条件极值、切平面与法线。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647914",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=20",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2022-21",
        "year": 2022,
        "number": 21,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "中值定理与零点证明",
        "question": "设函数 \\(f\\left( x \\right)\\) 在 \\(\\left( -\\infty,+\\infty \\right)\\) 上有二阶连续导数，证明：\n\\(f^{\\prime\\prime}\\left( x \\right) \\ge 0\\)\n的充分必要条件是对任意不同的实数 \\(a,b\\)，都有\n\\(f\\left( \\frac{a+b}{2} \\right) \\le \\frac{1}{b-a}\\int_{a}^{b} f\\left( x \\right) \\mathrm{~d}x\\)\n成立.",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "m=\\frac{a+b}{2}",
          "f''(x)\\ge0",
          "f(x)\\ge f(m)+f'(m)(x-m)\\quad(x\\in[a,b]).",
          "[a,b]",
          "\\int_a^b(x-m)\\,\\mathrm{d}x=0",
          "f\\left(\\frac{a+b}{2}\\right)\\le \\frac1{b-a}\\int_a^b f(x)\\,\\mathrm{d}x.",
          "x_0",
          "f''(x_0)<0"
        ],
        "guide": {
          "concept": "存在性证明的核心是‘构造谁、在哪个区间用哪个定理’。目标式通常提示辅助函数的导数形式。",
          "method": "先用连续性和端点异号找零点；再根据目标式反推辅助函数。罗尔定理要逐项核对闭区间连续、开区间可导、端点函数值相等。",
          "pitfall": "只写‘由罗尔定理可得’但不说明区间与条件会丢步骤分；多个根要使用互不重叠的区间。",
          "extension": "常与积分中值定理、柯西中值定理、零点个数和不等式结合。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647914",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=20",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2022-22",
        "year": 2022,
        "number": 22,
        "kind": "解答题",
        "subject": "线性代数",
        "topic": "二次型",
        "question": "已知二次型\n\\(f\\left( x_{1},x_{2},x_{3} \\right) = 3x_{1}^{2} + 4x_{2}^{2} + 3x_{3}^{2} + 2x_{1}x_{3}\\)\n（I） 求正交矩阵 \\(\\boldsymbol{Q}\\)，使正交变换 \\(\\boldsymbol{x} = \\boldsymbol{Q}\\boldsymbol{y}\\) 将二次型 \\(f\\left( x_{1},x_{2},x_{3} \\right)\\) 化为标准形；\n（II） 证明\n\\(\\min_{\\boldsymbol{x} \\ne \\boldsymbol{0}} \\frac{f\\left( \\boldsymbol{x} \\right)}{\\boldsymbol{x}^{T}\\boldsymbol{x}} = 2\\)",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "A=\\begin{pmatrix}3&0&1\\\\0&4&0\\\\1&0&3\\end{pmatrix}.",
          "4,4,2",
          "\\xi_1=\\frac1{\\sqrt2}\\begin{pmatrix}1\\\\0\\\\1\\end{pmatrix},\\quad\n\\xi_2=\\begin{pmatrix}0\\\\1\\\\0\\end{pmatrix},\\quad\n\\xi_3=\\frac1{\\sqrt2}\\begin{pmatrix}-1\\\\0\\\\1\\end{pmatrix}.",
          "Q=(\\xi_1,\\xi_2,\\xi_3)=\n\\begin{pmatrix}\n\\frac1{\\sqrt2}&0&-\\frac1{\\sqrt2}\\\\\n0&1&0\\\\\n\\frac1{\\sqrt2}&0&\\frac1{\\sqrt2}\n\\end{pmatrix},",
          "Q^TAQ=\\operatorname{diag}(4,4,2),",
          "4y_1^2+4y_2^2+2y_3^2",
          "\\frac{f(x)}{x^Tx}=\\frac{4y_1^2+4y_2^2+2y_3^2}{y_1^2+y_2^2+y_3^2}\\ge2,",
          "y_1=y_2=0,\\ y_3\\ne0"
        ],
        "guide": {
          "concept": "二次型先写对称矩阵，交叉项 2aᵢⱼxᵢxⱼ 对应矩阵中的 aᵢⱼ，而不是2aᵢⱼ。",
          "method": "配方法用于一般可逆线性变换；实对称矩阵正交对角化用特征值和单位正交特征向量；正定性可用顺序主子式。",
          "pitfall": "标准形系数与特征值只在正交变换下直接对应；规范形只保留正负号和零。",
          "extension": "相邻考法包括合同、惯性指数和矩阵正定性。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647914",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=20",
        "videoExtraUrl": ""
      }
    ]
  },
  {
    "year": 2023,
    "videoPage": 23,
    "items": [
      {
        "id": "math2-2023-1",
        "year": 2023,
        "number": 1,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "极限计算",
        "question": "曲线\n\\[y=x\\ln\\left(e+\\frac{1}{x-1}\\right)\n\\]\n的斜渐近线方程为（ ）。\nA. \\(y=x+e\\)\nB. \\(y=x+\\dfrac{1}{e}\\)\nC. \\(y=x\\)\nD. \\(y=x-\\dfrac{1}{e}\\)",
        "answer": "B",
        "keyFormulas": [
          "\\lim_{x\\to+\\infty}\\frac{y}{x}=1,",
          "\\lim_{x\\to+\\infty}(y-x)\n=\\lim_{x\\to+\\infty}x\\!\\left[\\ln\\left(e+\\frac{1}{x-1}\\right)-1\\right]\n=\\frac{1}{e}.",
          "y=x+\\frac{1}{e}."
        ],
        "guide": {
          "concept": "极限题的关键不是一上来求导，而是先判断未定式类型，再选择等价无穷小、洛必达、泰勒、夹逼、单调有界或定积分定义。",
          "method": "第一行写清趋近方向和分子分母的量级；第二行处理主导项；第三行再约分或求导。遇到和式先试定积分定义，遇到递推先找单调性与界。",
          "pitfall": "连续使用洛必达会掩盖结构，也容易在不满足条件时误用。含绝对值、单侧极限和参数时必须分别检查。",
          "extension": "可联动复习无穷小比较、数列极限、函数极限和含参极限。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647889",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=23",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2023-2",
        "year": 2023,
        "number": 2,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "连续、间断与渐近线",
        "question": "函数\n\\[f(x)=\n\\begin{cases}\n\\dfrac{1}{\\sqrt{1+x^2}}, & x\\le 0,\\\\[0.6em]\n(x+1)\\cos x, & x>0\n\\end{cases}\n\\]\n的一个原函数为（ ）。\nA.\n\\[F(x)=\n\\begin{cases}\n\\ln\\left(\\sqrt{1+x^2}-x\\right), & x\\le 0,\\\\\n(x+1)\\cos x-\\sin x, & x>0\n\\end{cases}\n\\]\nB.\n\\[F(x)=\n\\begin{cases}\n\\ln\\left(\\sqrt{1+x^2}-x\\right)+1, & x\\le 0,\\\\\n(x+1)\\cos x-\\sin x, & x>0\n\\end{cases}\n\\]\nC.\n\\[F(x)=\n\\begin{cases}\n\\ln\\left(\\sqrt{1+x^2}+x\\right), & x\\le 0,\\\\\n(x+1)\\sin x+\\cos x, & x>0\n\\end{cases}\n\\]\nD.\n\\[F(x)=\n\\begin{cases}\n\\ln\\left(\\sqrt{1+x^2}+x\\right)+1, & x\\le 0,\\\\\n(x+1)\\sin x+\\cos x, & x>0\n\\end{cases}\n\\]",
        "answer": "D",
        "keyFormulas": [
          "x\\le 0",
          "\\int \\frac{dx}{\\sqrt{1+x^2}}=\\ln\\left(\\sqrt{1+x^2}+x\\right)+C_1.",
          "x>0",
          "\\int (x+1)\\cos x\\,dx=(x+1)\\sin x+\\cos x+C_2.",
          "x=0",
          "C_2=0",
          "C_1=1"
        ],
        "guide": {
          "concept": "先列出所有可能出问题的点：分母为0、对数真数不正、根式越界以及分段点。连续要求极限存在并等于函数值。",
          "method": "对每个候选点分别算左右极限；渐近线则按垂直、水平、斜渐近线三类依次检查，斜渐近线用 k=lim f(x)/x、b=lim[f(x)-kx]。",
          "pitfall": "函数在点处有定义不代表连续；无定义也不代表一定是无穷间断。渐近线要区分 x→+∞ 与 x→-∞。",
          "extension": "相邻考法包括原函数存在性、可导与连续关系、间断点分类。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647889",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=23",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2023-3",
        "year": 2023,
        "number": 3,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "等价无穷小与泰勒展开",
        "question": "已知数列 \\(\\{x_n\\}\\)，\\(\\{y_n\\}\\) 满足\n\\[x_1=y_1=\\frac12,\\qquad x_{n+1}=\\sin x_n,\\qquad y_{n+1}=y_n^2\\quad (n=1,2,\\cdots),\n\\]\n则当 \\(n\\to\\infty\\) 时，（ ）。\nA. \\(x_n\\) 是 \\(y_n\\) 的高阶无穷小\nB. \\(y_n\\) 是 \\(x_n\\) 的高阶无穷小\nC. \\(x_n\\) 与 \\(y_n\\) 是等价无穷小\nD. \\(x_n\\) 与 \\(y_n\\) 是同阶但不等价的无穷小",
        "answer": "B",
        "keyFormulas": [
          "x_{n+1}=\\sin x_n\\le x_n",
          "x_n>0",
          "\\{x_n\\}",
          "A=\\sin A,",
          "A=0",
          "0<y_1<1",
          "y_{n+1}=y_n^2<y_n",
          "y_n\\to 0"
        ],
        "guide": {
          "concept": "先看每一项在趋近点附近的最低非零次幂。老师在视频里强调：比较阶数时系数通常不重要，但正负号、幂次和趋近条件绝不能口算带过。",
          "method": "把根式、对数、指数、三角函数逐个换成标准等价式；若相减造成低阶项抵消，就立即改用泰勒展开，写到第一个不为零的项。最后只比较幂指数。",
          "pitfall": "最容易把 1-cos x 与 cos x-1 的符号写反，或在加减结构中违规直接做等价替换。先确认替换对象整体趋于0。",
          "extension": "同一知识点还会考极限值、无穷小阶数排序、参数确定和泰勒系数。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647889",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=23",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2023-4",
        "year": 2023,
        "number": 4,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "常微分方程",
        "question": "若微分方程\n\\[y''+ay'+by=0\n\\]\n的解在 \\((-\\infty,+\\infty)\\) 上有界，则（ ）。\nA. \\(a<0,\\ b>0\\)\nB. \\(a>0,\\ b>0\\)\nC. \\(a=0,\\ b>0\\)\nD. \\(a=0,\\ b<0\\)",
        "answer": "C",
        "keyFormulas": [
          "\\lambda^2+a\\lambda+b=0.",
          "\\alpha\\ne 0",
          "(-\\infty,+\\infty)",
          "\\lambda=\\pm i\\beta\\quad (\\beta\\ne 0),",
          "a=0,\\qquad b>0."
        ],
        "guide": {
          "concept": "先识别类型：可分离、一阶线性、伯努利、可降阶或二阶常系数。类型判断比直接试算更重要。",
          "method": "齐次部分先解特征方程；非齐次项按形式设特解，若与齐次解共振就乘 x 的适当次幂；最后用初值确定常数。",
          "pitfall": "设特解时多项式次数、指数因子和三角组合都要保留；共振次数漏乘 x 是高频错误。",
          "extension": "相邻考法包括微分方程建模、曲线族和积分方程。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647889",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=23",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2023-5",
        "year": 2023,
        "number": 5,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "极限计算",
        "question": "设函数 \\(y=f(x)\\) 由\n\\[\\begin{cases}\nx=2t+|t|,\\\\\ny=|t|\\sin t\n\\end{cases}\n\\]\n确定，则（ ）。\nA. \\(f(x)\\) 连续，\\(f'(0)\\) 不存在\nB. \\(f'(0)\\) 存在，\\(f'(x)\\) 在 \\(x=0\\) 处不连续\nC. \\(f'(x)\\) 连续，\\(f''(0)\\) 不存在\nD. \\(f''(0)\\) 存在，\\(f''(x)\\) 在 \\(x=0\\) 处不连续",
        "answer": "C",
        "keyFormulas": [
          "t<0",
          "x=t,\\qquad y=-t\\sin t,",
          "y=-x\\sin x\\qquad (x<0).",
          "t\\ge 0",
          "x=3t,\\qquad y=t\\sin t,",
          "y=\\frac{x}{3}\\sin\\frac{x}{3}\\qquad (x\\ge 0).",
          "f(x)=\n\\begin{cases}\n-x\\sin x, & x<0,\\\\[0.4em]\n\\dfrac{x}{3}\\sin\\dfrac{x}{3}, & x\\ge 0.\n\\end{cases}",
          "f'(0)=0,"
        ],
        "guide": {
          "concept": "极限题的关键不是一上来求导，而是先判断未定式类型，再选择等价无穷小、洛必达、泰勒、夹逼、单调有界或定积分定义。",
          "method": "第一行写清趋近方向和分子分母的量级；第二行处理主导项；第三行再约分或求导。遇到和式先试定积分定义，遇到递推先找单调性与界。",
          "pitfall": "连续使用洛必达会掩盖结构，也容易在不满足条件时误用。含绝对值、单侧极限和参数时必须分别检查。",
          "extension": "可联动复习无穷小比较、数列极限、函数极限和含参极限。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647889",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=23",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2023-6",
        "year": 2023,
        "number": 6,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "综合应用",
        "question": "若函数\n\\[f(a)=\\int_2^{+\\infty}\\frac{1}{x(\\ln x)^{a+1}}\\,dx\n\\]\n在 \\(a=a_0\\) 处取得最小值，则 \\(a_0=\\)（ ）。\nA. \\(-\\dfrac{1}{\\ln(\\ln 2)}\\)\nB. \\(-\\ln(\\ln 2)\\)\nC. \\(\\dfrac{1}{\\ln 2}\\)\nD. \\(\\ln 2\\)",
        "answer": "A",
        "keyFormulas": [
          "u=\\ln x",
          "f(a)=\\int_{\\ln 2}^{+\\infty}u^{-a-1}\\,du\n=\\frac{(\\ln 2)^{-a}}{a}.",
          "f'(a)=-(\\ln 2)^{-a}\\ln(\\ln 2)\\cdot \\frac{a+\\dfrac{1}{\\ln(\\ln 2)}}{a^2}.",
          "f'(a)=0",
          "a_0=-\\frac{1}{\\ln(\\ln 2)}."
        ],
        "guide": {
          "concept": "先判断题目属于高等数学还是线性代数，并把题干中的已知条件、所求对象和限制范围分别圈出。",
          "method": "选择最直接的定义或定理，先写公式，再代条件，保留关键中间步骤，最后用答案反查题意。",
          "pitfall": "不要在读题未完成时开始心算；符号、定义域、单侧条件和矩阵乘法顺序都是高频失分点。",
          "extension": "做完后把本题归入对应专题，再找一道同方法不同外观的题复做。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647889",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=23",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2023-7",
        "year": 2023,
        "number": 7,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "等价无穷小与泰勒展开",
        "question": "设函数\n\\[f(x)=(x^2+a)e^x,\n\\]\n若 \\(f(x)\\) 没有极值点，但曲线 \\(y=f(x)\\) 有拐点，则 \\(a\\) 的取值范围是（ ）。\nA. \\([0,1)\\)\nB. \\([1,+\\infty)\\)\nC. \\([1,2)\\)\nD. \\([2,+\\infty)\\)",
        "answer": "C",
        "keyFormulas": [
          "f'(x)=(x^2+2x+a)e^x.",
          "x^2+2x+a\\ge 0\\ \\text{对任意 }x,",
          "4-4a\\le 0\\quad\\Rightarrow\\quad a\\ge 1.",
          "f''(x)=(x^2+4x+a+2)e^x.",
          "16-4(a+2)>0\\quad\\Rightarrow\\quad a<2.",
          "1\\le a<2."
        ],
        "guide": {
          "concept": "先看每一项在趋近点附近的最低非零次幂。老师在视频里强调：比较阶数时系数通常不重要，但正负号、幂次和趋近条件绝不能口算带过。",
          "method": "把根式、对数、指数、三角函数逐个换成标准等价式；若相减造成低阶项抵消，就立即改用泰勒展开，写到第一个不为零的项。最后只比较幂指数。",
          "pitfall": "最容易把 1-cos x 与 cos x-1 的符号写反，或在加减结构中违规直接做等价替换。先确认替换对象整体趋于0。",
          "extension": "同一知识点还会考极限值、无穷小阶数排序、参数确定和泰勒系数。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647889",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=23",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2023-8",
        "year": 2023,
        "number": 8,
        "kind": "单项选择题",
        "subject": "线性代数",
        "topic": "行列式与矩阵运算",
        "question": "设 \\(\\boldsymbol A,\\boldsymbol B\\) 为 \\(n\\) 阶可逆矩阵，\\(\\boldsymbol E\\) 为 \\(n\\) 阶单位矩阵，\\(\\boldsymbol M^*\\) 为矩阵 \\(\\boldsymbol M\\) 的伴随矩阵，则\n\\[\\begin{pmatrix}\n\\boldsymbol A & \\boldsymbol E\\\\\n\\boldsymbol O & \\boldsymbol B\n\\end{pmatrix}^{*}\n=\n\\]\n（ ）。\nA.\n\\[\\begin{pmatrix}\n|\\boldsymbol A|\\boldsymbol B^* & -\\boldsymbol B^*\\boldsymbol A^*\\\\\n\\boldsymbol O & |\\boldsymbol B|\\boldsymbol A^*\n\\end{pmatrix}\n\\]\nB.\n\\[\\begin{pmatrix}\n|\\boldsymbol A|\\boldsymbol B^* & -\\boldsymbol A^*\\boldsymbol B^*\\\\\n\\boldsymbol O & |\\boldsymbol B|\\boldsymbol A^*\n\\end{pmatrix}\n\\]\nC.\n\\[\\begin{pmatrix}\n|\\boldsymbol B|\\boldsymbol A^* & -\\boldsymbol B^*\\boldsymbol A^*\\\\\n\\boldsymbol O & |\\boldsymbol A|\\boldsymbol B^*\n\\end{pmatrix}\n\\]\nD.\n\\[\\begin{pmatrix}\n|\\boldsymbol B|\\boldsymbol A^* & -\\boldsymbol A^*\\boldsymbol B^*\\\\\n\\boldsymbol O & |\\boldsymbol A|\\boldsymbol B^*\n\\end{pmatrix}\n\\]",
        "answer": "D",
        "keyFormulas": [
          "\\boldsymbol M=\n\\begin{pmatrix}\n\\boldsymbol A & \\boldsymbol E\\\\\n\\boldsymbol O & \\boldsymbol B\n\\end{pmatrix}.",
          "|\\boldsymbol M|=|\\boldsymbol A||\\boldsymbol B|.",
          "\\boldsymbol M^{-1}=\n\\begin{pmatrix}\n\\boldsymbol A^{-1} & -\\boldsymbol A^{-1}\\boldsymbol B^{-1}\\\\\n\\boldsymbol O & \\boldsymbol B^{-1}\n\\end{pmatrix}.",
          "\\boldsymbol M^*=|\\boldsymbol M|\\boldsymbol M^{-1}\n=\n\\begin{pmatrix}\n|\\boldsymbol B|\\boldsymbol A^* & -\\boldsymbol A^*\\boldsymbol B^*\\\\\n\\boldsymbol O & |\\boldsymbol A|\\boldsymbol B^*\n\\end{pmatrix}."
        ],
        "guide": {
          "concept": "矩阵题先看题目要求的是数值、秩、可逆性还是结构关系。矩阵乘法不能交换顺序。",
          "method": "优先使用初等变换、分块、A·A* = |A|E、可逆矩阵保持秩等性质，避免无目的展开。",
          "pitfall": "行变换与列变换对行列式的影响不同；矩阵等式中左右乘同一矩阵也要保持位置。",
          "extension": "相邻考法包括秩、方程组、特征值和相似。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647889",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=23",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2023-9",
        "year": 2023,
        "number": 9,
        "kind": "单项选择题",
        "subject": "线性代数",
        "topic": "二次型",
        "question": "二次型\n\\[f(x_1,x_2,x_3)=(x_1+x_2)^2+(x_1+x_3)^2-4(x_2-x_3)^2\n\\]\n的规范形为（ ）。\nA. \\(y_1^2+y_2^2\\)\nB. \\(y_1^2-y_2^2\\)\nC. \\(y_1^2+y_2^2-4y_3^2\\)\nD. \\(y_1^2+y_2^2-y_3^2\\)",
        "answer": "B",
        "keyFormulas": [
          "\\boldsymbol A=\n\\begin{pmatrix}\n2&1&1\\\\\n1&-3&4\\\\\n1&4&-3\n\\end{pmatrix}.",
          "|\\lambda\\boldsymbol E-\\boldsymbol A|\n=\\lambda(\\lambda+7)(\\lambda-3).",
          "3,\\quad -7,\\quad 0.",
          "y_1^2-y_2^2."
        ],
        "guide": {
          "concept": "二次型先写对称矩阵，交叉项 2aᵢⱼxᵢxⱼ 对应矩阵中的 aᵢⱼ，而不是2aᵢⱼ。",
          "method": "配方法用于一般可逆线性变换；实对称矩阵正交对角化用特征值和单位正交特征向量；正定性可用顺序主子式。",
          "pitfall": "标准形系数与特征值只在正交变换下直接对应；规范形只保留正负号和零。",
          "extension": "相邻考法包括合同、惯性指数和矩阵正定性。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647889",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=23",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2023-10",
        "year": 2023,
        "number": 10,
        "kind": "单项选择题",
        "subject": "线性代数",
        "topic": "行列式与矩阵运算",
        "question": "已知向量\n\\[\\boldsymbol a_1=\n\\begin{pmatrix}\n1\\\\\n2\\\\\n3\n\\end{pmatrix},\\quad\n\\boldsymbol a_2=\n\\begin{pmatrix}\n2\\\\\n1\\\\\n1\n\\end{pmatrix},\\quad\n\\boldsymbol\\beta_1=\n\\begin{pmatrix}\n2\\\\\n5\\\\\n9\n\\end{pmatrix},\\quad\n\\boldsymbol\\beta_2=\n\\begin{pmatrix}\n1\\\\\n0\\\\\n1\n\\end{pmatrix}.\n\\]\n若 \\(\\boldsymbol\\gamma\\) 既可由 \\(\\boldsymbol a_1,\\boldsymbol a_2\\) 线性表示，也可由 \\(\\boldsymbol\\beta_1,\\boldsymbol\\beta_2\\) 线性表示，则 \\(\\boldsymbol\\gamma=\\)（ ）。\nA.\n\\[k\n\\begin{pmatrix}\n3\\\\\n3\\\\\n4\n\\end{pmatrix},\\ k\\in\\mathbb R\n\\]\nB.\n\\[k\n\\begin{pmatrix}\n3\\\\\n5\\\\\n10\n\\end{pmatrix},\\ k\\in\\mathbb R\n\\]\nC.\n\\[k\n\\begin{pmatrix}\n-1\\\\\n1\\\\\n2\n\\end{pmatrix},\\ k\\in\\mathbb R\n\\]\nD.\n\\[k\n\\begin{pmatrix}\n1\\\\\n5\\\\\n8\n\\end{pmatrix},\\ k\\in\\mathbb R\n\\]",
        "answer": "D",
        "keyFormulas": [
          "\\boldsymbol\\gamma=k_1\\boldsymbol a_1+k_2\\boldsymbol a_2=l_1\\boldsymbol\\beta_1+l_2\\boldsymbol\\beta_2.",
          "\\begin{pmatrix}\nk_1\\\\\nk_2\\\\\nl_1\\\\\nl_2\n\\end{pmatrix}\n=\nk\n\\begin{pmatrix}\n3\\\\\n-1\\\\\n1\\\\\n-1\n\\end{pmatrix}.",
          "\\boldsymbol\\gamma=3k\\boldsymbol a_1-k\\boldsymbol a_2\n=k\n\\begin{pmatrix}\n1\\\\\n5\\\\\n8\n\\end{pmatrix}."
        ],
        "guide": {
          "concept": "矩阵题先看题目要求的是数值、秩、可逆性还是结构关系。矩阵乘法不能交换顺序。",
          "method": "优先使用初等变换、分块、A·A* = |A|E、可逆矩阵保持秩等性质，避免无目的展开。",
          "pitfall": "行变换与列变换对行列式的影响不同；矩阵等式中左右乘同一矩阵也要保持位置。",
          "extension": "相邻考法包括秩、方程组、特征值和相似。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647889",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=23",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2023-11",
        "year": 2023,
        "number": 11,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "等价无穷小与泰勒展开",
        "question": "当 \\(x\\to 0\\) 时，函数\n\\[f(x)=ax+bx^2+\\ln(1+x)\n\\]\n与\n\\[g(x)=e^{x^2}-\\cos x\n\\]\n是等价无穷小，则\n\\[ab=\\underline{\\hspace{3em}}.\n\\]",
        "answer": "\\(-2\\)",
        "keyFormulas": [
          "\\ln(1+x)=x-\\frac{x^2}{2}+o(x^2),",
          "f(x)=(a+1)x+\\left(b-\\frac12\\right)x^2+o(x^2).",
          "e^{x^2}-\\cos x=\\left(1+x^2+o(x^2)\\right)-\\left(1-\\frac{x^2}{2}+o(x^2)\\right)\n=\\frac32x^2+o(x^2).",
          "a+1=0,\\qquad b-\\frac12=\\frac32.",
          "a=-1,\\qquad b=2,\\qquad ab=-2."
        ],
        "guide": {
          "concept": "先看每一项在趋近点附近的最低非零次幂。老师在视频里强调：比较阶数时系数通常不重要，但正负号、幂次和趋近条件绝不能口算带过。",
          "method": "把根式、对数、指数、三角函数逐个换成标准等价式；若相减造成低阶项抵消，就立即改用泰勒展开，写到第一个不为零的项。最后只比较幂指数。",
          "pitfall": "最容易把 1-cos x 与 cos x-1 的符号写反，或在加减结构中违规直接做等价替换。先确认替换对象整体趋于0。",
          "extension": "同一知识点还会考极限值、无穷小阶数排序、参数确定和泰勒系数。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647889",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=23",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2023-12",
        "year": 2023,
        "number": 12,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "定积分的几何与物理应用",
        "question": "曲线\n\\[y=\\int_{-\\sqrt3}^{x}\\sqrt{3-t^2}\\,dt\n\\]\n的弧长为\n\\[\\underline{\\hspace{3em}}.\n\\]",
        "answer": "\\(\\dfrac{4\\pi}{3}+\\sqrt3\\)",
        "keyFormulas": [
          "y'=\\sqrt{3-x^2},",
          "L=\\int_{-\\sqrt3}^{\\sqrt3}\\sqrt{1+(y')^2}\\,dx\n=\\int_{-\\sqrt3}^{\\sqrt3}\\sqrt{4-x^2}\\,dx.",
          "[-\\sqrt3,\\sqrt3]",
          "L=\\frac{4\\pi}{3}+\\sqrt3."
        ],
        "guide": {
          "concept": "先把几何量写成微元：面积、体积、弧长、压力或功，再决定沿哪个变量累加。",
          "method": "画图并标出典型小条；写微元公式；确定积分区间；最后检查结果量纲和正负。旋转体要先确认绕哪条轴。",
          "pitfall": "把半径、直径和到旋转轴的距离混淆，会让结果成倍出错；物理题还要统一单位。",
          "extension": "相邻考法包括相关变化率、最值和二重积分应用。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647889",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=23",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2023-13",
        "year": 2023,
        "number": 13,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "多元函数微分",
        "question": "设函数 \\(z=z(x,y)\\) 由\n\\[e^z+xz=2x-y\n\\]\n确定，则\n\\[\\left.\\frac{\\partial^2 z}{\\partial x^2}\\right|_{(1,1)}\n=\\underline{\\hspace{3em}}.\n\\]",
        "answer": "\\(-\\dfrac{3}{2}\\)",
        "keyFormulas": [
          "(x,y)=(1,1)",
          "e^z+z=1,",
          "z=0",
          "e^z z_x+z+xz_x=2.",
          "(1,1,0)",
          "z_x=1.",
          "e^z(z_x)^2+e^z z_{xx}+2z_x+xz_{xx}=0.",
          "z_x=1"
        ],
        "guide": {
          "concept": "多元题先区分偏导数、方向导数、全微分和复合函数链式法则。偏导存在不自动推出连续或可微。",
          "method": "画依赖关系：外层变量对中间变量求偏导，中间变量再对自变量求导；每条路径的乘积相加。指定点最后再代入。",
          "pitfall": "二阶混合偏导只有在相应连续条件下才能随意交换次序；沿坐标轴极限不能代替二元极限。",
          "extension": "相邻考法包括极值、条件极值、切平面与法线。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647889",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=23",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2023-14",
        "year": 2023,
        "number": 14,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "综合应用",
        "question": "曲线\n\\[3x^3=y^5+2y^3\n\\]\n在 \\(x=1\\) 对应点处的法线斜率为\n\\[\\underline{\\hspace{3em}}.\n\\]",
        "answer": "\\(-\\dfrac{11}{9}\\)",
        "keyFormulas": [
          "x=1",
          "3=y^5+2y^3,",
          "(1,1)",
          "9x^2=(5y^4+6y^2)\\frac{dy}{dx}.",
          "\\frac{dy}{dx}=\\frac{9}{11}.",
          "-\\frac{11}{9}."
        ],
        "guide": {
          "concept": "先判断题目属于高等数学还是线性代数，并把题干中的已知条件、所求对象和限制范围分别圈出。",
          "method": "选择最直接的定义或定理，先写公式，再代条件，保留关键中间步骤，最后用答案反查题意。",
          "pitfall": "不要在读题未完成时开始心算；符号、定义域、单侧条件和矩阵乘法顺序都是高频失分点。",
          "extension": "做完后把本题归入对应专题，再找一道同方法不同外观的题复做。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647889",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=23",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2023-15",
        "year": 2023,
        "number": 15,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "连续、间断与渐近线",
        "question": "设连续函数 \\(f(x)\\) 满足\n\\[f(x+2)-f(x)=x,\\qquad \\int_0^2 f(x)\\,dx=0,\n\\]\n则\n\\[\\int_1^3 f(x)\\,dx=\\underline{\\hspace{3em}}.\n\\]",
        "answer": "\\(\\dfrac12\\)",
        "keyFormulas": [
          "f(x+2)=f(x)+x,",
          "\\int_1^3 f(x)\\,dx\n=\\int_1^2 f(x)\\,dx+\\int_2^3 f(x)\\,dx.",
          "u=x-2",
          "\\int_2^3 f(x)\\,dx=\\int_0^1 f(u+2)\\,du=\\int_0^1[f(u)+u]\\,du.",
          "\\int_0^2 f(x)\\,dx=0,",
          "\\int_0^1 f",
          "\\int_1^2 f",
          "\\int_1^3 f(x)\\,dx=\\int_0^1 u\\,du=\\frac12."
        ],
        "guide": {
          "concept": "先列出所有可能出问题的点：分母为0、对数真数不正、根式越界以及分段点。连续要求极限存在并等于函数值。",
          "method": "对每个候选点分别算左右极限；渐近线则按垂直、水平、斜渐近线三类依次检查，斜渐近线用 k=lim f(x)/x、b=lim[f(x)-kx]。",
          "pitfall": "函数在点处有定义不代表连续；无定义也不代表一定是无穷间断。渐近线要区分 x→+∞ 与 x→-∞。",
          "extension": "相邻考法包括原函数存在性、可导与连续关系、间断点分类。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647889",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=23",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2023-16",
        "year": 2023,
        "number": 16,
        "kind": "填空题",
        "subject": "线性代数",
        "topic": "线性方程组",
        "question": "已知线性方程组\n\\[\\begin{cases}\nax_1+x_3=1,\\\\\nx_1+ax_2+x_3=0,\\\\\nx_1+2x_2+ax_3=0,\\\\\nax_1+bx_2=2\n\\end{cases}\n\\]\n有解，其中 \\(a,b\\) 为常数。若\n\\[\\begin{vmatrix}\na&0&1\\\\\n1&a&1\\\\\n1&2&a\n\\end{vmatrix}=4,\n\\]\n则\n\\[\\begin{vmatrix}\n1&a&1\\\\\n1&2&a\\\\\na&b&0\n\\end{vmatrix}\n=\\underline{\\hspace{3em}}.\n\\]",
        "answer": "\\(8\\)",
        "keyFormulas": [
          "\\begin{vmatrix}\na&0&1&1\\\\\n1&a&1&0\\\\\n1&2&a&0\\\\\na&b&0&2\n\\end{vmatrix}=0.",
          "-\\begin{vmatrix}\n1&a&1\\\\\n1&2&a\\\\\na&b&0\n\\end{vmatrix}\n+2\\begin{vmatrix}\na&0&1\\\\\n1&a&1\\\\\n1&2&a\n\\end{vmatrix}=0.",
          "-\\begin{vmatrix}\n1&a&1\\\\\n1&2&a\\\\\na&b&0\n\\end{vmatrix}+8=0,"
        ],
        "guide": {
          "concept": "方程组先比较系数矩阵秩 r(A) 与增广矩阵秩 r(A,b)，再讨论无解、唯一解或无穷多解。",
          "method": "对增广矩阵做初等行变换；确定主元和自由变量；非齐次通解=一个特解+齐次方程通解。",
          "pitfall": "有参数时秩可能分情况变化；不要只看行列式为0就直接断言无解。",
          "extension": "相邻考法包括公共解、同解方程组与矩阵秩。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647889",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=23",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2023-17",
        "year": 2023,
        "number": 17,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "定积分的几何与物理应用",
        "question": "设曲线 \\(\\boldsymbol L:y=y(x)\\)（\\(x>e\\)）经过点 \\((e^2,0)\\)，且 \\(\\boldsymbol L\\) 上任一点 \\(P(x,y)\\) 到 \\(y\\) 轴的距离等于该点处切线在 \\(y\\) 轴上的截距。\n求 \\(y(x)\\)；\n在 \\(\\boldsymbol L\\) 上求一点，使该点处的切线与两坐标轴所围三角形的面积最小，并求此最小面积。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "P(x,y)",
          "Y-y=y'(X-x).",
          "X=0",
          "y-xy'.",
          "y-xy'=x,",
          "y'-\\frac{1}{x}y=-1.",
          "y=(C-\\ln x)x.",
          "(e^2,0)"
        ],
        "guide": {
          "concept": "先把几何量写成微元：面积、体积、弧长、压力或功，再决定沿哪个变量累加。",
          "method": "画图并标出典型小条；写微元公式；确定积分区间；最后检查结果量纲和正负。旋转体要先确认绕哪条轴。",
          "pitfall": "把半径、直径和到旋转轴的距离混淆，会让结果成倍出错；物理题还要统一单位。",
          "extension": "相邻考法包括相关变化率、最值和二重积分应用。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647889",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=23",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2023-18",
        "year": 2023,
        "number": 18,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "多元函数微分",
        "question": "求函数\n\\[f(x,y)=xe^{\\cos y}+\\frac{x^2}{2}\n\\]\n的极值。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "f_x=e^{\\cos y}+x,\\qquad\nf_y=-xe^{\\cos y}\\sin y.",
          "f_x=0,\\qquad f_y=0,",
          "\\left(-e^{-1},(2k+1)\\pi\\right),\\qquad\n\\left(-e,2k\\pi\\right),\\qquad k\\in\\mathbb Z.",
          "f_{xx}=1,\\qquad\nf_{xy}=-e^{\\cos y}\\sin y,",
          "f_{yy}=xe^{\\cos y}\\sin^2 y-xe^{\\cos y}\\cos y.",
          "\\left(-e^{-1},(2k+1)\\pi\\right)",
          "A=1,\\quad B=0,\\quad C=-e^{-2},",
          "AC-B^2<0,"
        ],
        "guide": {
          "concept": "多元题先区分偏导数、方向导数、全微分和复合函数链式法则。偏导存在不自动推出连续或可微。",
          "method": "画依赖关系：外层变量对中间变量求偏导，中间变量再对自变量求导；每条路径的乘积相加。指定点最后再代入。",
          "pitfall": "二阶混合偏导只有在相应连续条件下才能随意交换次序；沿坐标轴极限不能代替二元极限。",
          "extension": "相邻考法包括极值、条件极值、切平面与法线。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647889",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=23",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2023-19",
        "year": 2023,
        "number": 19,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "定积分的几何与物理应用",
        "question": "已知平面区域\n\\[D=\\left\\{(x,y)\\mid 0\\le y\\le \\frac{1}{x\\sqrt{1+x^2}},\\ x\\ge 1\\right\\}.\n\\]\n求 \\(D\\) 的面积；\n求 \\(D\\) 绕 \\(x\\) 轴旋转所成旋转体的体积。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "A=\\int_1^{+\\infty}\\frac{1}{x\\sqrt{1+x^2}}\\,dx.",
          "x=\\tan t",
          "A=\\int_{\\pi/4}^{\\pi/2}\\csc t\\,dt\n=\\ln|\\csc t-\\cot t|\\Big|_{\\pi/4}^{\\pi/2}\n=\\ln(1+\\sqrt2).",
          "V=\\pi\\int_1^{+\\infty}\\frac{1}{x^2(1+x^2)}\\,dx.",
          "\\frac{1}{x^2(1+x^2)}=\\frac{1}{x^2}-\\frac{1}{1+x^2}.",
          "V=\\pi\\int_1^{+\\infty}\\left(\\frac{1}{x^2}-\\frac{1}{1+x^2}\\right)\\,dx\n=\\pi\\left(1-\\frac{\\pi}{4}\\right)."
        ],
        "guide": {
          "concept": "先把几何量写成微元：面积、体积、弧长、压力或功，再决定沿哪个变量累加。",
          "method": "画图并标出典型小条；写微元公式；确定积分区间；最后检查结果量纲和正负。旋转体要先确认绕哪条轴。",
          "pitfall": "把半径、直径和到旋转轴的距离混淆，会让结果成倍出错；物理题还要统一单位。",
          "extension": "相邻考法包括相关变化率、最值和二重积分应用。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647889",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=23",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2023-20",
        "year": 2023,
        "number": 20,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "二重积分与区域变换",
        "question": "设平面有界区域 \\(D\\) 位于第一象限，由曲线\n\\[x^2+y^2-xy=1,\\qquad x^2+y^2-xy=2\n\\]\n与直线\n\\[y=\\sqrt3\\,x,\\qquad y=0\n\\]\n围成，计算\n\\[\\iint_D \\frac{1}{3x^2+y^2}\\,dx\\,dy.\n\\]",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "x=r\\cos\\theta,\\qquad y=r\\sin\\theta.",
          "0\\le \\theta\\le \\frac{\\pi}{3},",
          "\\frac{1}{\\sqrt{1-\\sin\\theta\\cos\\theta}}\\le r\\le \\frac{\\sqrt2}{\\sqrt{1-\\sin\\theta\\cos\\theta}}.",
          "I=\\int_0^{\\pi/3}\\int_{\\frac{1}{\\sqrt{1-\\sin\\theta\\cos\\theta}}}^{\\frac{\\sqrt2}{\\sqrt{1-\\sin\\theta\\cos\\theta}}}\n\\frac{r}{3r^2\\cos^2\\theta+r^2\\sin^2\\theta}\\,dr\\,d\\theta.",
          "I=\\int_0^{\\pi/3}\\frac{d\\theta}{3\\cos^2\\theta+\\sin^2\\theta}\\int_{r_1}^{r_2}\\frac{dr}{r}.",
          "\\int_{r_1}^{r_2}\\frac{dr}{r}=\\ln\\sqrt2.",
          "I=\\ln\\sqrt2\\int_0^{\\pi/3}\\frac{d\\theta}{3\\cos^2\\theta+\\sin^2\\theta}.",
          "u=\\tan\\theta"
        ],
        "guide": {
          "concept": "二重积分先画区域。很多计算错误不是积分不会，而是上下限描述了错误的区域。",
          "method": "标出边界交点；选择先 x 后 y 或先 y 后 x；圆、扇形和只含 x²+y² 的结构优先考虑极坐标，并补上雅可比 r。",
          "pitfall": "交换积分次序必须重新写全部上下限；利用对称性前先检查区域和被积函数奇偶性。",
          "extension": "相邻考法包括体积、质心、变换积分次序和参数区域。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647889",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=23",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2023-21",
        "year": 2023,
        "number": 21,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "中值定理与零点证明",
        "question": "设函数 \\(f(x)\\) 在 \\([-a,a]\\) 上具有二阶连续导数。证明：\n若 \\(f(0)=0\\)，则存在 \\(\\xi\\in(-a,a)\\)，使得\\[f''(\\xi)=\\frac{f(a)+f(-a)}{a^2};\n\\]\n若 \\(f(x)\\) 在 \\((-a,a)\\) 内取得极值，则存在 \\(\\eta\\in(-a,a)\\)，使得\\[|f''(\\eta)|\\ge \\frac{|f(a)-f(-a)|}{2a^2}.\n\\]",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "\\xi",
          "f(a)=f'(0)a+\\frac{f''(\\xi_1)}{2}a^2,\\qquad 0<\\xi_1<a,",
          "f(-a)=-f'(0)a+\\frac{f''(\\xi_2)}{2}a^2,\\qquad -a<\\xi_2<0.",
          "\\frac{f''(\\xi_1)+f''(\\xi_2)}{2}\n=\\frac{f(a)+f(-a)}{a^2}.",
          "f''",
          "\\xi\\in(\\xi_2,\\xi_1)\\subset(-a,a)",
          "f''(\\xi)=\\frac{f(a)+f(-a)}{a^2}.",
          "\\eta"
        ],
        "guide": {
          "concept": "存在性证明的核心是‘构造谁、在哪个区间用哪个定理’。目标式通常提示辅助函数的导数形式。",
          "method": "先用连续性和端点异号找零点；再根据目标式反推辅助函数。罗尔定理要逐项核对闭区间连续、开区间可导、端点函数值相等。",
          "pitfall": "只写‘由罗尔定理可得’但不说明区间与条件会丢步骤分；多个根要使用互不重叠的区间。",
          "extension": "常与积分中值定理、柯西中值定理、零点个数和不等式结合。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647889",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=23",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2023-22",
        "year": 2023,
        "number": 22,
        "kind": "解答题",
        "subject": "线性代数",
        "topic": "特征值、特征向量与相似",
        "question": "设矩阵 \\(\\boldsymbol A\\) 满足：对任意 \\(x_1,x_2,x_3\\)，均有\n\\[\\boldsymbol A\n\\begin{pmatrix}\nx_1\\\\\nx_2\\\\\nx_3\n\\end{pmatrix}\n=\n\\begin{pmatrix}\nx_1+x_2+x_3\\\\\n2x_1-x_2+x_3\\\\\nx_2-x_3\n\\end{pmatrix}.\n\\]\n求 \\(\\boldsymbol A\\)；\n求可逆矩阵 \\(\\boldsymbol P\\) 与对角矩阵 \\(\\boldsymbol\\Lambda\\)，使得\\[\\boldsymbol P^{-1}\\boldsymbol A\\boldsymbol P=\\boldsymbol\\Lambda.\n\\]",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "\\boldsymbol A",
          "\\boldsymbol A=\n\\begin{pmatrix}\n1&1&1\\\\\n2&-1&1\\\\\n0&1&-1\n\\end{pmatrix}.",
          "|\\lambda\\boldsymbol E-\\boldsymbol A|\n=\n\\begin{vmatrix}\n\\lambda-1&-1&-1\\\\\n-2&\\lambda+1&-1\\\\\n0&-1&\\lambda+1\n\\end{vmatrix}\n=(\\lambda+2)(\\lambda+1)(\\lambda-2).",
          "\\lambda_1=-2,\\qquad \\lambda_2=-1,\\qquad \\lambda_3=2.",
          "\\lambda=-2",
          "\\boldsymbol\\alpha_1=\n\\begin{pmatrix}\n0\\\\\n-1\\\\\n1\n\\end{pmatrix}.",
          "\\lambda=-1",
          "\\boldsymbol\\alpha_2=\n\\begin{pmatrix}\n-1\\\\\n0\\\\\n2\n\\end{pmatrix}."
        ],
        "guide": {
          "concept": "先用特征方程找特征值，再解 (A-λE)x=0。能否对角化取决于线性无关特征向量是否足够。",
          "method": "利用迹、行列式和已知特征向量简化；分别求每个特征值的特征子空间维数；按列组成 P，并保持特征值顺序一致。",
          "pitfall": "重特征值不等于一定不能对角化；相似矩阵特征值相同，但反过来不一定相似。",
          "extension": "相邻考法包括矩阵幂、二次型正交变换和实对称矩阵。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647889",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=23",
        "videoExtraUrl": ""
      }
    ]
  },
  {
    "year": 2024,
    "videoPage": 26,
    "items": [
      {
        "id": "math2-2024-1",
        "year": 2024,
        "number": 1,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "极限计算",
        "question": "函数\n\\[f(x)=|x|^{\\frac{1}{(1-x)(x-2)}}\n\\]\n的第一类间断点的个数为（ ）\nA. \\(3\\)\nB. \\(2\\)\nC. \\(1\\)\nD. \\(0\\)",
        "answer": "C",
        "keyFormulas": [
          "x=0,1,2",
          "\\lim_{x\\to 1}f(x)\n=\\lim_{x\\to 1}\\exp\\!\\left(\\frac{\\ln x}{(1-x)(x-2)}\\right)\n=e,",
          "x=1",
          "\\lim_{x\\to 2^-}f(x)=+\\infty,\\qquad \\lim_{x\\to 0^+}f(x)=+\\infty,"
        ],
        "guide": {
          "concept": "极限题的关键不是一上来求导，而是先判断未定式类型，再选择等价无穷小、洛必达、泰勒、夹逼、单调有界或定积分定义。",
          "method": "第一行写清趋近方向和分子分母的量级；第二行处理主导项；第三行再约分或求导。遇到和式先试定积分定义，遇到递推先找单调性与界。",
          "pitfall": "连续使用洛必达会掩盖结构，也容易在不满足条件时误用。含绝对值、单侧极限和参数时必须分别检查。",
          "extension": "可联动复习无穷小比较、数列极限、函数极限和含参极限。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647845",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=26",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2024-2",
        "year": 2024,
        "number": 2,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "极限计算",
        "question": "已知\n\\[\\left\\{\n\\begin{aligned}\nx &= 1+t^3,\\\\\ny &= e^{t^2},\n\\end{aligned}\n\\right.\n\\]\n则\n\\[\\lim_{x\\to+\\infty}x\\!\\left[f\\!\\left(2+\\frac{2}{x}\\right)-f(2)\\right]\n\\]\n等于（ ）\nA. \\(2e\\)\nB. \\(\\frac{4}{3}e\\)\nC. \\(\\frac{2}{3}e\\)\nD. \\(\\frac{e}{3}\\)",
        "answer": "B",
        "keyFormulas": [
          "f'(x)=\\frac{dy/dt}{dx/dt}=\\frac{2te^{t^2}}{3t^2}.",
          "x=2",
          "t=1",
          "f'(2)=\\frac{2}{3}e.",
          "\\lim_{x\\to+\\infty}x\\!\\left[f\\!\\left(2+\\frac{2}{x}\\right)-f(2)\\right]\n=2\\lim_{x\\to+\\infty}\\frac{f\\!\\left(2+\\frac{2}{x}\\right)-f(2)}{2/x}\n=2f'(2)=\\frac{4}{3}e."
        ],
        "guide": {
          "concept": "极限题的关键不是一上来求导，而是先判断未定式类型，再选择等价无穷小、洛必达、泰勒、夹逼、单调有界或定积分定义。",
          "method": "第一行写清趋近方向和分子分母的量级；第二行处理主导项；第三行再约分或求导。遇到和式先试定积分定义，遇到递推先找单调性与界。",
          "pitfall": "连续使用洛必达会掩盖结构，也容易在不满足条件时误用。含绝对值、单侧极限和参数时必须分别检查。",
          "extension": "可联动复习无穷小比较、数列极限、函数极限和含参极限。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647845",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=26",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2024-3",
        "year": 2024,
        "number": 3,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "一元积分",
        "question": "已知\n\\[f(x)=\\int_0^{\\sin x}\\sin t^3\\,dt,\\qquad\ng(x)=\\int_0^x f(t)\\,dt,\n\\]\n则（ ）\nA. \\(f(x)\\) 为奇函数，\\(g(x)\\) 为奇函数\nB. \\(f(x)\\) 为奇函数，\\(g(x)\\) 为偶函数\nC. \\(f(x)\\) 为偶函数，\\(g(x)\\) 为偶函数\nD. \\(f(x)\\) 为偶函数，\\(g(x)\\) 为奇函数",
        "answer": "D",
        "keyFormulas": [
          "h(x)=\\int_0^x \\sin t^3\\,dt.",
          "\\sin(t^3)",
          "h(x)",
          "f(x)=h(\\sin x)",
          "g(x)=\\int_0^x f(t)\\,dt",
          "[0,x]"
        ],
        "guide": {
          "concept": "先看结构再选方法：复合函数配导数用换元，乘积中一项求导变简单用分部积分，有理函数先做代数分解。",
          "method": "写出换元变量与新上下限；反常积分先把瑕点或无穷端点改写成极限；变上限积分先用微积分基本定理求导。",
          "pitfall": "不定积分别漏常数C；分段函数的原函数在分段点还必须连续；反常积分算出原函数不等于已经收敛，必须看极限。",
          "extension": "相邻考法包括积分比较、面积体积、积分不等式和含参积分。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647845",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=26",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2024-4",
        "year": 2024,
        "number": 4,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "连续、间断与渐近线",
        "question": "已知数列 \\(\\{a_n\\}\\)（\\(a_n\\ne 0\\)），若 \\(\\{a_n\\}\\) 发散，则（ ）\nA. \\(\\left\\{a_n+\\frac{1}{a_n}\\right\\}\\) 发散\nB. \\(\\left\\{a_n-\\frac{1}{a_n}\\right\\}\\) 发散\nC. \\(\\left\\{e^{a_n}+\\frac{1}{e^{a_n}}\\right\\}\\) 发散\nD. \\(\\left\\{e^{a_n}-\\frac{1}{e^{a_n}}\\right\\}\\) 发散",
        "answer": "D",
        "keyFormulas": [
          "a_n=2^{(-1)^n}",
          "a_n=(-1)^n",
          "b_n=e^{a_n}-e^{-a_n}.",
          "\\varphi(x)=e^x-e^{-x}",
          "\\mathbb R",
          "\\{b_n\\}",
          "a_n=\\varphi^{-1}(b_n)"
        ],
        "guide": {
          "concept": "先列出所有可能出问题的点：分母为0、对数真数不正、根式越界以及分段点。连续要求极限存在并等于函数值。",
          "method": "对每个候选点分别算左右极限；渐近线则按垂直、水平、斜渐近线三类依次检查，斜渐近线用 k=lim f(x)/x、b=lim[f(x)-kx]。",
          "pitfall": "函数在点处有定义不代表连续；无定义也不代表一定是无穷间断。渐近线要区分 x→+∞ 与 x→-∞。",
          "extension": "相邻考法包括原函数存在性、可导与连续关系、间断点分类。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647845",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=26",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2024-5",
        "year": 2024,
        "number": 5,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "多元函数微分",
        "question": "已知函数\n\\[f(x,y)=\n\\begin{cases}\n(x^2+y^2)\\sin\\frac{1}{xy}, & xy\\ne 0,\\\\\n0, & xy=0,\n\\end{cases}\n\\]\n则在点 \\((0,0)\\) 处（ ）\nA. \\(\\dfrac{\\partial f}{\\partial x}\\) 连续，\\(f\\) 可微\nB. \\(\\dfrac{\\partial f}{\\partial x}\\) 连续，\\(f\\) 不可微\nC. \\(\\dfrac{\\partial f}{\\partial x}\\) 不连续，\\(f\\) 可微\nD. \\(\\dfrac{\\partial f}{\\partial x}\\) 不连续，\\(f\\) 不可微",
        "answer": "C",
        "keyFormulas": [
          "\\frac{\\partial f}{\\partial x}(0,0)=0,\\qquad \\frac{\\partial f}{\\partial y}(0,0)=0.",
          "\\left|\\frac{f(x,y)-f(0,0)}{\\sqrt{x^2+y^2}}\\right|\n\\le \\sqrt{x^2+y^2}\\to 0,",
          "(0,0)",
          "xy\\ne 0",
          "\\frac{\\partial f}{\\partial x}\n=2x\\sin\\frac{1}{xy}-\\frac{x^2+y^2}{x^2y}\\cos\\frac{1}{xy},"
        ],
        "guide": {
          "concept": "多元题先区分偏导数、方向导数、全微分和复合函数链式法则。偏导存在不自动推出连续或可微。",
          "method": "画依赖关系：外层变量对中间变量求偏导，中间变量再对自变量求导；每条路径的乘积相加。指定点最后再代入。",
          "pitfall": "二阶混合偏导只有在相应连续条件下才能随意交换次序；沿坐标轴极限不能代替二元极限。",
          "extension": "相邻考法包括极值、条件极值、切平面与法线。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647845",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=26",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2024-6",
        "year": 2024,
        "number": 6,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "多元函数微分",
        "question": "设 \\(f(x,y)\\) 为连续函数，则\n\\[\\int_{\\pi/6}^{\\pi/2}dx\\int_{\\sin x}^{1}f(x,y)\\,dy\n=\n(\\ \\ )\n\\]\nA. \\(\\displaystyle \\int_{1/2}^{1}dy\\int_{\\pi/6}^{\\arcsin y}f(x,y)\\,dx\\)\nB. \\(\\displaystyle \\int_{1/2}^{1}dy\\int_{\\arcsin y}^{\\pi/2}f(x,y)\\,dx\\)\nC. \\(\\displaystyle \\int_0^{1/2}dy\\int_{\\pi/6}^{\\arcsin y}f(x,y)\\,dx\\)\nD. \\(\\displaystyle \\int_0^{1/2}dy\\int_{\\arcsin y}^{\\pi/2}f(x,y)\\,dx\\)",
        "answer": "A",
        "keyFormulas": [
          "\\frac{\\pi}{6}\\le x\\le \\frac{\\pi}{2},\\qquad \\sin x\\le y\\le 1.",
          "\\frac12\\le y\\le 1,\\qquad \\frac{\\pi}{6}\\le x\\le \\arcsin y."
        ],
        "guide": {
          "concept": "多元题先区分偏导数、方向导数、全微分和复合函数链式法则。偏导存在不自动推出连续或可微。",
          "method": "画依赖关系：外层变量对中间变量求偏导，中间变量再对自变量求导；每条路径的乘积相加。指定点最后再代入。",
          "pitfall": "二阶混合偏导只有在相应连续条件下才能随意交换次序；沿坐标轴极限不能代替二元极限。",
          "extension": "相邻考法包括极值、条件极值、切平面与法线。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647845",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=26",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2024-7",
        "year": 2024,
        "number": 7,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "极限计算",
        "question": "设非负函数 \\(f(x)\\) 在 \\([0,+\\infty)\\) 上连续，给出三个命题：\n若 \\(\\int_0^{+\\infty}f^2(x)\\,dx\\) 收敛，则 \\(\\int_0^{+\\infty}f(x)\\,dx\\) 收敛；\n若存在 \\(p>1\\)，使极限 \\(\\lim_{x\\to+\\infty}x^p f(x)\\) 存在，则 \\(\\int_0^{+\\infty}f(x)\\,dx\\) 收敛；\n若 \\(\\int_0^{+\\infty}f(x)\\,dx\\) 收敛，则存在 \\(p>1\\)，使极限 \\(\\lim_{x\\to+\\infty}x^p f(x)\\) 存在。\n其中正确命题的个数是（ ）\nA. \\(0\\)\nB. \\(1\\)\nC. \\(2\\)\nD. \\(3\\)",
        "answer": "B",
        "keyFormulas": [
          "f(x)=\\dfrac{1}{1+x}",
          "\\int_0^{+\\infty}f^2(x)\\,dx",
          "\\int_0^{+\\infty}f(x)\\,dx",
          "\\lim_{x\\to+\\infty}x^pf(x)",
          "f(x)\\le \\dfrac{M}{x^p}",
          "f(x)=\\frac{1}{(x+2)\\ln^2(x+2)},",
          "p>1",
          "x^pf(x)"
        ],
        "guide": {
          "concept": "极限题的关键不是一上来求导，而是先判断未定式类型，再选择等价无穷小、洛必达、泰勒、夹逼、单调有界或定积分定义。",
          "method": "第一行写清趋近方向和分子分母的量级；第二行处理主导项；第三行再约分或求导。遇到和式先试定积分定义，遇到递推先找单调性与界。",
          "pitfall": "连续使用洛必达会掩盖结构，也容易在不满足条件时误用。含绝对值、单侧极限和参数时必须分别检查。",
          "extension": "可联动复习无穷小比较、数列极限、函数极限和含参极限。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647845",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=26",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2024-8",
        "year": 2024,
        "number": 8,
        "kind": "单项选择题",
        "subject": "线性代数",
        "topic": "行列式与矩阵运算",
        "question": "设 \\(\\boldsymbol A\\) 为三阶矩阵，\n\\[\\boldsymbol P=\n\\begin{pmatrix}\n1&0&0\\\\\n0&1&0\\\\\n1&0&1\n\\end{pmatrix},\n\\]\n若\n\\[\\boldsymbol P^T\\boldsymbol A\\boldsymbol P^2=\n\\begin{pmatrix}\na+2c&0&c\\\\\n0&b&0\\\\\n2c&0&c\n\\end{pmatrix},\n\\]\n则矩阵 \\(\\boldsymbol A\\) 为（ ）\nA. \\(\\begin{pmatrix} c&0&0\\\\ 0&a&0\\\\ 0&0&b \\end{pmatrix}\\)\nB. \\(\\begin{pmatrix} b&0&0\\\\ 0&c&0\\\\ 0&0&a \\end{pmatrix}\\)\nC. \\(\\begin{pmatrix} a&0&0\\\\ 0&b&0\\\\ 0&0&c \\end{pmatrix}\\)\nD. \\(\\begin{pmatrix} c&0&0\\\\ 0&b&0\\\\ 0&0&a \\end{pmatrix}\\)",
        "answer": "C",
        "keyFormulas": [
          "\\boldsymbol A=(\\boldsymbol P^T)^{-1}\n\\begin{pmatrix}\na+2c&0&c\\\\\n0&b&0\\\\\n2c&0&c\n\\end{pmatrix}\n(\\boldsymbol P^2)^{-1}",
          "\\boldsymbol A=\n\\begin{pmatrix}\na&0&0\\\\\n0&b&0\\\\\n0&0&c\n\\end{pmatrix}."
        ],
        "guide": {
          "concept": "矩阵题先看题目要求的是数值、秩、可逆性还是结构关系。矩阵乘法不能交换顺序。",
          "method": "优先使用初等变换、分块、A·A* = |A|E、可逆矩阵保持秩等性质，避免无目的展开。",
          "pitfall": "行变换与列变换对行列式的影响不同；矩阵等式中左右乘同一矩阵也要保持位置。",
          "extension": "相邻考法包括秩、方程组、特征值和相似。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647845",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=26",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2024-9",
        "year": 2024,
        "number": 9,
        "kind": "单项选择题",
        "subject": "线性代数",
        "topic": "行列式与矩阵运算",
        "question": "设 \\(\\boldsymbol A\\) 为 \\(4\\) 阶矩阵，\\(\\boldsymbol A^*\\) 为 \\(\\boldsymbol A\\) 的伴随矩阵。若\n\\[\\boldsymbol A(\\boldsymbol A-\\boldsymbol A^*)=\\boldsymbol O,\\qquad \\boldsymbol A\\ne \\boldsymbol A^*,\n\\]\n则 \\(r(\\boldsymbol A)\\) 的取值为（ ）\nA. \\(0\\) 或 \\(1\\)\nB. \\(1\\) 或 \\(3\\)\nC. \\(2\\) 或 \\(3\\)\nD. \\(1\\) 或 \\(2\\)",
        "answer": "D",
        "keyFormulas": [
          "\\boldsymbol A",
          "\\boldsymbol A^*=|\\boldsymbol A|\\boldsymbol A^{-1}",
          "\\boldsymbol A=\\boldsymbol A^*",
          "\\boldsymbol A\\boldsymbol A^*=|\\boldsymbol A|\\boldsymbol E=\\boldsymbol O.",
          "\\boldsymbol A^2=\\boldsymbol O.",
          "r(\\boldsymbol A)+r(\\boldsymbol A)\\le 4 \\Rightarrow r(\\boldsymbol A)\\le 2.",
          "\\boldsymbol A\\ne \\boldsymbol O",
          "r(\\boldsymbol A)=1\\ \\text{或}\\ 2."
        ],
        "guide": {
          "concept": "矩阵题先看题目要求的是数值、秩、可逆性还是结构关系。矩阵乘法不能交换顺序。",
          "method": "优先使用初等变换、分块、A·A* = |A|E、可逆矩阵保持秩等性质，避免无目的展开。",
          "pitfall": "行变换与列变换对行列式的影响不同；矩阵等式中左右乘同一矩阵也要保持位置。",
          "extension": "相邻考法包括秩、方程组、特征值和相似。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647845",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=26",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2024-10",
        "year": 2024,
        "number": 10,
        "kind": "单项选择题",
        "subject": "线性代数",
        "topic": "特征值、特征向量与相似",
        "question": "设 \\(\\boldsymbol A,\\boldsymbol B\\) 均为 \\(2\\) 阶矩阵，且 \\(\\boldsymbol A\\boldsymbol B=\\boldsymbol B\\boldsymbol A\\)，则“\\(\\boldsymbol A\\) 有两个不相等的特征值”是“\\(\\boldsymbol B\\) 可对角化”的（ ）\nA. 充要条件\nB. 充分不必要条件\nC. 必要不充分条件\nD. 既不充分也不必要条件",
        "answer": "B",
        "keyFormulas": [
          "\\boldsymbol A",
          "\\boldsymbol A\\boldsymbol B=\\boldsymbol B\\boldsymbol A",
          "\\boldsymbol B",
          "\\boldsymbol A=\\boldsymbol B=\\boldsymbol E,"
        ],
        "guide": {
          "concept": "先用特征方程找特征值，再解 (A-λE)x=0。能否对角化取决于线性无关特征向量是否足够。",
          "method": "利用迹、行列式和已知特征向量简化；分别求每个特征值的特征子空间维数；按列组成 P，并保持特征值顺序一致。",
          "pitfall": "重特征值不等于一定不能对角化；相似矩阵特征值相同，但反过来不一定相似。",
          "extension": "相邻考法包括矩阵幂、二次型正交变换和实对称矩阵。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647845",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=26",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2024-11",
        "year": 2024,
        "number": 11,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "综合应用",
        "question": "曲线 \\(y^2=x\\) 在点 \\((0,0)\\) 处的曲率圆方程为 ______",
        "answer": "\\[\\left(x-\\frac12\\right)^2+y^2=\\frac14\n\\]",
        "keyFormulas": [
          "x=y^2",
          "x'(y)=2y,\\qquad x''(y)=2.",
          "y=0",
          "K=\\frac{|x''(0)|}{\\left(1+[x'(0)]^2\\right)^{3/2}}=2,",
          "R=\\frac12.",
          "\\left(\\frac12,0\\right)"
        ],
        "guide": {
          "concept": "先判断题目属于高等数学还是线性代数，并把题干中的已知条件、所求对象和限制范围分别圈出。",
          "method": "选择最直接的定义或定理，先写公式，再代条件，保留关键中间步骤，最后用答案反查题意。",
          "pitfall": "不要在读题未完成时开始心算；符号、定义域、单侧条件和矩阵乘法顺序都是高频失分点。",
          "extension": "做完后把本题归入对应专题，再找一道同方法不同外观的题复做。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647845",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=26",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2024-12",
        "year": 2024,
        "number": 12,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "多元函数微分",
        "question": "函数\n\\[f(x,y)=2x^3-9x^2-6y^4+12x+24y\n\\]\n的极值点为 ______",
        "answer": "\\[(1,1)\n\\]",
        "keyFormulas": [
          "f_x=6x^2-18x+12,\\qquad f_y=-24y^3+24,",
          "(1,1)",
          "(2,1)",
          "f_{xx}=12x-18,\\qquad f_{xy}=0,\\qquad f_{yy}=-72y^2,",
          "f_{xx}f_{yy}-f_{xy}^2>0,\\qquad f_{xx}<0,"
        ],
        "guide": {
          "concept": "多元题先区分偏导数、方向导数、全微分和复合函数链式法则。偏导存在不自动推出连续或可微。",
          "method": "画依赖关系：外层变量对中间变量求偏导，中间变量再对自变量求导；每条路径的乘积相加。指定点最后再代入。",
          "pitfall": "二阶混合偏导只有在相应连续条件下才能随意交换次序；沿坐标轴极限不能代替二元极限。",
          "extension": "相邻考法包括极值、条件极值、切平面与法线。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647845",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=26",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2024-13",
        "year": 2024,
        "number": 13,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "常微分方程",
        "question": "微分方程\n\\[y'=\\frac{1}{(x+y)^2}\n\\]\n满足初始条件 \\(y(1)=0\\) 的解为 ______",
        "answer": "\\[y=\\arctan(x+y)-\\frac{\\pi}{4}\n\\]",
        "keyFormulas": [
          "u=x+y",
          "y=u-x,\\qquad y'=u'-1.",
          "u'-1=\\frac{1}{u^2}\n\\Rightarrow\nu'=\\frac{1+u^2}{u^2}.",
          "x=u-\\arctan u+C.",
          "y=\\arctan(x+y)-C.",
          "y(1)=0",
          "C=\\frac{\\pi}{4}"
        ],
        "guide": {
          "concept": "先识别类型：可分离、一阶线性、伯努利、可降阶或二阶常系数。类型判断比直接试算更重要。",
          "method": "齐次部分先解特征方程；非齐次项按形式设特解，若与齐次解共振就乘 x 的适当次幂；最后用初值确定常数。",
          "pitfall": "设特解时多项式次数、指数因子和三角组合都要保留；共振次数漏乘 x 是高频错误。",
          "extension": "相邻考法包括微分方程建模、曲线族和积分方程。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647845",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=26",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2024-14",
        "year": 2024,
        "number": 14,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "导数定义与高阶导数",
        "question": "已知函数\n\\[f(x)=x^2(e^x-1),\n\\]\n则\n\\[f^{(5)}(1)=\\ \\underline{\\qquad}\n\\]",
        "answer": "\\[31e\n\\]",
        "keyFormulas": [
          "f^{(5)}(x)=(x^2+10x+20)e^x.",
          "f^{(5)}(1)=(1+10+20)e=31e."
        ],
        "guide": {
          "concept": "导数是局部变化率。分段点、绝对值点和题目指定点，优先回到导数定义，而不是机械套求导公式。",
          "method": "先求函数值，再写差商；左右分别化简并取极限。高阶导数题先观察幂级数或通项结构，避免重复求导。参数方程用 dy/dx=(dy/dt)/(dx/dt)。",
          "pitfall": "二阶参数导数还要再除一次 dx/dt；不要把对 t 求导直接当成对 x 求导。",
          "extension": "可联动切线法线、相关变化率、隐函数求导和曲率。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647845",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=26",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2024-15",
        "year": 2024,
        "number": 15,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "综合应用",
        "question": "某物体以速度\n\\[v(t)=t+k\\sin\\pi t\n\\]\n做直线运动。若它从 \\(t=0\\) 到 \\(t=3\\) 的平均速度是 \\(\\dfrac52\\)，则 \\(k=\\) ______",
        "answer": "\\[\\frac{3\\pi}{2}\n\\]",
        "keyFormulas": [
          "\\frac13\\int_0^3\\bigl(t+k\\sin\\pi t\\bigr)\\,dt=\\frac52.",
          "\\frac13\\left(\\frac92+\\frac{2k}{\\pi}\\right)=\\frac52,",
          "k=\\frac{3\\pi}{2}."
        ],
        "guide": {
          "concept": "先判断题目属于高等数学还是线性代数，并把题干中的已知条件、所求对象和限制范围分别圈出。",
          "method": "选择最直接的定义或定理，先写公式，再代条件，保留关键中间步骤，最后用答案反查题意。",
          "pitfall": "不要在读题未完成时开始心算；符号、定义域、单侧条件和矩阵乘法顺序都是高频失分点。",
          "extension": "做完后把本题归入对应专题，再找一道同方法不同外观的题复做。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647845",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=26",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2024-16",
        "year": 2024,
        "number": 16,
        "kind": "填空题",
        "subject": "线性代数",
        "topic": "向量组与线性相关",
        "question": "设向量\n\\[\\boldsymbol\\alpha_1=\n\\begin{pmatrix}\na\\\\\n1\\\\\n-1\\\\\n1\n\\end{pmatrix},\\quad\n\\boldsymbol\\alpha_2=\n\\begin{pmatrix}\n1\\\\\n1\\\\\nb\\\\\na\n\\end{pmatrix},\\quad\n\\boldsymbol\\alpha_3=\n\\begin{pmatrix}\n1\\\\\na\\\\\n-1\\\\\n1\n\\end{pmatrix}.\n\\]\n若 \\(\\boldsymbol\\alpha_1,\\boldsymbol\\alpha_2,\\boldsymbol\\alpha_3\\) 线性相关，且其中任意两个向量均线性无关，则 \\(ab=\\) ______",
        "answer": "\\[-4\n\\]",
        "keyFormulas": [
          "(\\boldsymbol\\alpha_1,\\boldsymbol\\alpha_2,\\boldsymbol\\alpha_3)",
          "\\begin{pmatrix}\n1&1&a\\\\\n0&1&-1-a\\\\\n0&0&a+b\\\\\n0&0&a+2\n\\end{pmatrix}.",
          "a+2=0,\\qquad a+b=0.",
          "a=-2,\\qquad b=2,",
          "ab=-4."
        ],
        "guide": {
          "concept": "线性相关的本质是能否找到不全为0的系数组合成零向量；秩等于最大线性无关组所含向量数。",
          "method": "把向量按列组成矩阵并做行化简；主元列给出最大无关组；自由变量对应齐次方程基础解系。",
          "pitfall": "不要把行化简后的列直接当成原向量组的最大无关组；选列应回到原矩阵对应位置。",
          "extension": "相邻考法包括线性表示、秩不等式和解空间维数。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647845",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=26",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2024-17",
        "year": 2024,
        "number": 17,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "二重积分与区域变换",
        "question": "设平面有界区域 \\(D\\) 位于第一象限，由曲线\n\\[xy=\\frac13,\\qquad xy=3\n\\]\n与直线\n\\[y=\\frac13x,\\qquad y=3x\n\\]\n围成，计算\n\\[\\iint_D(1+x-y)\\,dx\\,dy.\n\\]",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "y=x",
          "\\iint_D x\\,dx\\,dy=\\iint_D y\\,dx\\,dy,",
          "\\iint_D 1\\,dx\\,dy,",
          "x=r\\cos\\theta,\\qquad y=r\\sin\\theta.",
          "\\arctan\\frac13\\le \\theta\\le \\arctan 3,",
          "\\frac13\\le r^2\\sin\\theta\\cos\\theta\\le 3.",
          "\\iint_D dx\\,dy\n=\n\\int_{\\arctan(1/3)}^{\\arctan 3}\n\\int_{\\sqrt{\\frac{1}{3\\sin\\theta\\cos\\theta}}}^{\\sqrt{\\frac{3}{\\sin\\theta\\cos\\theta}}}\nr\\,dr\\,d\\theta.",
          "\\iint_D dx\\,dy\n=\n\\frac{8}{3}\\int_{\\arctan(1/3)}^{\\arctan 3}\\frac{1}{\\sin 2\\theta}\\,d\\theta\n=\n\\frac{8}{3}\\ln 3."
        ],
        "guide": {
          "concept": "二重积分先画区域。很多计算错误不是积分不会，而是上下限描述了错误的区域。",
          "method": "标出边界交点；选择先 x 后 y 或先 y 后 x；圆、扇形和只含 x²+y² 的结构优先考虑极坐标，并补上雅可比 r。",
          "pitfall": "交换积分次序必须重新写全部上下限；利用对称性前先检查区域和被积函数奇偶性。",
          "extension": "相邻考法包括体积、质心、变换积分次序和参数区域。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647845",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=26",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2024-18",
        "year": 2024,
        "number": 18,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "常微分方程",
        "question": "设 \\(y=y(x)\\) 满足方程\n\\[x^2y''+xy'-9y=0,\n\\]\n且\n\\[y\\big|_{x=1}=2,\\qquad y'\\big|_{x=1}=6.\n\\]\n利用变换 \\(x=e^t\\) 化简方程，并求 \\(y(x)\\)；\n求\\[\\int_1^2 y(x)\\sqrt{4-x^2}\\,dx.\n\\]",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "x=e^t",
          "t=\\ln x",
          "\\frac{dy}{dx}=\\frac1x\\frac{dy}{dt},\\qquad\n\\frac{d^2y}{dx^2}=\\frac{1}{x^2}\\left(\\frac{d^2y}{dt^2}-\\frac{dy}{dt}\\right).",
          "\\frac{d^2y}{dt^2}-9y=0.",
          "y=C_1e^{3t}+C_2e^{-3t}=C_1x^3+C_2x^{-3}.",
          "y(1)=2,\\qquad y'(1)=6",
          "C_1=2,\\qquad C_2=0.",
          "\\boxed{y=2x^3 }."
        ],
        "guide": {
          "concept": "先识别类型：可分离、一阶线性、伯努利、可降阶或二阶常系数。类型判断比直接试算更重要。",
          "method": "齐次部分先解特征方程；非齐次项按形式设特解，若与齐次解共振就乘 x 的适当次幂；最后用初值确定常数。",
          "pitfall": "设特解时多项式次数、指数因子和三角组合都要保留；共振次数漏乘 x 是高频错误。",
          "extension": "相邻考法包括微分方程建模、曲线族和积分方程。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647845",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=26",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2024-19",
        "year": 2024,
        "number": 19,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "定积分的几何与物理应用",
        "question": "设 \\(t>0\\)，曲线\n\\[y=\\sqrt{x}e^{-x}\n\\]\n与直线 \\(x=t,\\ x=2t\\) 及 \\(x\\) 轴所围平面图形绕 \\(x\\) 轴旋转所得的旋转体体积为 \\(V(t)\\)，求 \\(V(t)\\) 的最大值。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "V(t)=\\pi\\int_t^{2t}\\bigl(\\sqrt{x}e^{-x}\\bigr)^2\\,dx\n=\\pi\\int_t^{2t}xe^{-2x}\\,dx.",
          "V'(t)=2\\pi\\cdot (2t)e^{-4t}-\\pi\\cdot t e^{-2t}\n=\\pi t e^{-2t}(4e^{-2t}-1).",
          "V'(t)\n\\begin{cases}\n>0, & 0<t<\\ln 2,\\\\\n<0, & t>\\ln 2.\n\\end{cases}",
          "V(t)",
          "t=\\ln 2",
          "V_{\\max}=V(\\ln 2)\n=\\pi\\int_{\\ln 2}^{2\\ln 2}xe^{-2x}\\,dx\n=\\pi\\left(\\frac{\\ln 2}{16}+\\frac{3}{64}\\right).",
          "\\boxed{V_{\\max}=\\pi\\left(\\frac{\\ln 2}{16}+\\frac{3}{64}\\right)}."
        ],
        "guide": {
          "concept": "先把几何量写成微元：面积、体积、弧长、压力或功，再决定沿哪个变量累加。",
          "method": "画图并标出典型小条；写微元公式；确定积分区间；最后检查结果量纲和正负。旋转体要先确认绕哪条轴。",
          "pitfall": "把半径、直径和到旋转轴的距离混淆，会让结果成倍出错；物理题还要统一单位。",
          "extension": "相邻考法包括相关变化率、最值和二重积分应用。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647845",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=26",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2024-20",
        "year": 2024,
        "number": 20,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "多元函数微分",
        "question": "设 \\(f(u,v)\\) 具有二阶连续偏导，\n\\[g(x,y)=f(2x+y,\\,3x-y),\n\\]\n且满足\n\\[\\frac{\\partial^2g}{\\partial x^2}\n+\\frac{\\partial^2g}{\\partial x\\partial y}\n-6\\frac{\\partial^2g}{\\partial y^2}=1.\n\\]\n求 \\(\\dfrac{\\partial^2f}{\\partial u\\partial v}\\)；\n若 \\(\\dfrac{\\partial f(u,0)}{\\partial u}=ue^{-u}\\)，且 \\(f(0,v)=\\dfrac{1}{50}v^2-1\\)，求 \\(f(u,v)\\)。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "u=2x+y,\\qquad v=3x-y.",
          "g_x=2f_u+3f_v,\\qquad g_y=f_u-f_v.",
          "g_{xx}=4f_{uu}+12f_{uv}+9f_{vv},",
          "g_{xy}=2f_{uu}+f_{uv}-3f_{vv},",
          "g_{yy}=f_{uu}-2f_{uv}+f_{vv}.",
          "25f_{uv}=1.",
          "\\boxed{f_{uv}=\\frac{1}{25}}.",
          "f_{uv}=\\frac{1}{25}"
        ],
        "guide": {
          "concept": "多元题先区分偏导数、方向导数、全微分和复合函数链式法则。偏导存在不自动推出连续或可微。",
          "method": "画依赖关系：外层变量对中间变量求偏导，中间变量再对自变量求导；每条路径的乘积相加。指定点最后再代入。",
          "pitfall": "二阶混合偏导只有在相应连续条件下才能随意交换次序；沿坐标轴极限不能代替二元极限。",
          "extension": "相邻考法包括极值、条件极值、切平面与法线。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647845",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=26",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2024-21",
        "year": 2024,
        "number": 21,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "中值定理与零点证明",
        "question": "设函数 \\(f(x)\\) 具有二阶导数，且\n\\[f'(0)=f'(1),\\qquad |f''(x)|\\le 1.\n\\]\n证明：\n当 \\(x\\in(0,1)\\) 时，\\[\\left|f(x)-f(0)(1-x)-f(1)x\\right|\\le \\frac{x(1-x)}{2};\n\\]\n\\[\\left|\\int_0^1 f(x)\\,dx-\\frac{f(0)+f(1)}{2}\\right|\\le \\frac{1}{12}.\n\\]",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "g(x)=f(x)-f(0)(1-x)-f(1)x-\\frac{x(1-x)}{2}.",
          "g(0)=g(1)=0,",
          "g''(x)=f''(x)+1\\ge 0.",
          "x_0\\in(0,1)",
          "g(x_0)>0",
          "(0,x_0)",
          "(x_0,1)",
          "\\xi_1,\\xi_2"
        ],
        "guide": {
          "concept": "存在性证明的核心是‘构造谁、在哪个区间用哪个定理’。目标式通常提示辅助函数的导数形式。",
          "method": "先用连续性和端点异号找零点；再根据目标式反推辅助函数。罗尔定理要逐项核对闭区间连续、开区间可导、端点函数值相等。",
          "pitfall": "只写‘由罗尔定理可得’但不说明区间与条件会丢步骤分；多个根要使用互不重叠的区间。",
          "extension": "常与积分中值定理、柯西中值定理、零点个数和不等式结合。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647845",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=26",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2024-22",
        "year": 2024,
        "number": 22,
        "kind": "解答题",
        "subject": "线性代数",
        "topic": "二次型",
        "question": "设矩阵\n\\[\\boldsymbol A=\n\\begin{pmatrix}\n0&1&a\\\\\n1&0&1\n\\end{pmatrix},\\qquad\n\\boldsymbol B=\n\\begin{pmatrix}\n1&1\\\\\n1&1\\\\\nb&2\n\\end{pmatrix},\n\\]\n二次型\n\\[f(x_1,x_2,x_3)=\\boldsymbol x^T\\boldsymbol B\\boldsymbol A\\boldsymbol x.\n\\]\n已知方程组 \\(\\boldsymbol A\\boldsymbol x=0\\) 的解是 \\(\\boldsymbol B^T\\boldsymbol x=0\\) 的解，但两个方程组不同解。\n求 \\(a,b\\) 的值；\n求正交变换 \\(\\boldsymbol x=\\boldsymbol Q\\boldsymbol y\\)，将 \\(f(x_1,x_2,x_3)\\) 化为标准形。",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "\\boldsymbol A\\boldsymbol x=0\n\\quad\\text{与}\\quad\n\\begin{pmatrix}\n\\boldsymbol A\\\\\n\\boldsymbol B^T\n\\end{pmatrix}\\boldsymbol x=0",
          "r\\!\\begin{pmatrix}\n\\boldsymbol A\\\\\n\\boldsymbol B^T\n\\end{pmatrix}\n=r(\\boldsymbol A)=2.",
          "\\begin{pmatrix}\n\\boldsymbol A\\\\\n\\boldsymbol B^T\n\\end{pmatrix}\n=\n\\begin{pmatrix}\n0&1&a\\\\\n1&0&1\\\\\n1&1&b\\\\\n1&1&2\n\\end{pmatrix}\n\\sim\n\\begin{pmatrix}\n1&1&2\\\\\n0&1&1\\\\\n0&0&a-1\\\\\n0&0&b-2\n\\end{pmatrix}.",
          "a-1=0,\\qquad b-2=0.",
          "\\boxed{a=1,\\qquad b=2 }.",
          "a=1,\\ b=2",
          "\\boldsymbol B\\boldsymbol A\n=\n\\begin{pmatrix}\n1&1\\\\\n1&1\\\\\n2&2\n\\end{pmatrix}\n\\begin{pmatrix}\n0&1&1\\\\\n1&0&1\n\\end{pmatrix}\n=\n\\begin{pmatrix}\n1&1&2\\\\\n1&1&2\\\\\n2&2&4\n\\end{pmatrix}.",
          "f(x_1,x_2,x_3)=x_1^2+x_2^2+4x_3^2+2x_1x_2+4x_1x_3+4x_2x_3\n=(x_1+x_2+2x_3)^2."
        ],
        "guide": {
          "concept": "二次型先写对称矩阵，交叉项 2aᵢⱼxᵢxⱼ 对应矩阵中的 aᵢⱼ，而不是2aᵢⱼ。",
          "method": "配方法用于一般可逆线性变换；实对称矩阵正交对角化用特征值和单位正交特征向量；正定性可用顺序主子式。",
          "pitfall": "标准形系数与特征值只在正交变换下直接对应；规范形只保留正负号和零。",
          "extension": "相邻考法包括合同、惯性指数和矩阵正定性。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647845",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=26",
        "videoExtraUrl": ""
      }
    ]
  },
  {
    "year": 2025,
    "videoPage": 27,
    "items": [
      {
        "id": "math2-2025-1",
        "year": 2025,
        "number": 1,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "综合应用",
        "question": "设函数 \\(z = z\\left( x, y \\right)\\) 由 \\(z + \\ln z - \\int_{y}^{x} e^{-t^{2}} \\mathrm{~d} t = 0\\) 确定，则 \\(\\frac{\\partial z}{\\partial x} + \\frac{\\partial z}{\\partial y} =\\)\nA. \\(\\frac{z}{z + 1}\\left( e^{-x^{2}} - e^{-y^{2}} \\right)\\)\nB. \\(\\frac{z}{z + 1}\\left( e^{-x^{2}} + e^{-y^{2}} \\right)\\)\nC. \\(-\\frac{z}{z + 1}\\left( e^{-x^{2}} - e^{-y^{2}} \\right)\\)\nD. \\(-\\frac{z}{z + 1}\\left( e^{-x^{2}} + e^{-y^{2}} \\right)\\)",
        "answer": "A",
        "keyFormulas": [
          "\\frac{\\partial z}{\\partial x} + \\frac{1}{z}\\frac{\\partial z}{\\partial x} - e^{-x^{2}} = 0",
          "\\frac{\\partial z}{\\partial y} + \\frac{1}{z}\\frac{\\partial z}{\\partial y} + e^{-y^{2}} = 0",
          "\\frac{\\partial z}{\\partial x} + \\frac{\\partial z}{\\partial y} = \\frac{z}{z + 1}\\left( e^{-x^{2}} - e^{-y^{2}} \\right)"
        ],
        "guide": {
          "concept": "先判断题目属于高等数学还是线性代数，并把题干中的已知条件、所求对象和限制范围分别圈出。",
          "method": "选择最直接的定义或定理，先写公式，再代条件，保留关键中间步骤，最后用答案反查题意。",
          "pitfall": "不要在读题未完成时开始心算；符号、定义域、单侧条件和矩阵乘法顺序都是高频失分点。",
          "extension": "做完后把本题归入对应专题，再找一道同方法不同外观的题复做。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647810",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=27",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2025-2",
        "year": 2025,
        "number": 2,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "单调性、极值与凹凸性",
        "question": "已知函数 \\(f\\left( x \\right) = \\int_{0}^{x} e^{t^{2}} \\sin t \\mathrm{~d} t\\)，\\(g\\left( x \\right) = \\int_{0}^{x} e^{t^{2}} \\sin t \\mathrm{~d} t \\cdot \\sin^{2} x\\)，则\nA. \\(x = 0\\) 是 \\(f\\left( x \\right)\\) 的极值点，也是 \\(g\\left( x \\right)\\) 的极值点.\nB. \\(x = 0\\) 是 \\(f\\left( x \\right)\\) 的极值点，\\(\\left( 0, 0 \\right)\\) 是曲线 \\(y = g\\left( x \\right)\\) 的拐点.\nC. \\(x = 0\\) 是 \\(f\\left( x \\right)\\) 的极值点，\\(\\left( 0, 0 \\right)\\) 是曲线 \\(y = f\\left( x \\right)\\) 的拐点.\nD. \\(\\left( 0, 0 \\right)\\) 是曲线 \\(y = f\\left( x \\right)\\) 的极值点，也是曲线 \\(y = g\\left( x \\right)\\) 的拐点.",
        "answer": "B",
        "keyFormulas": [
          "f^{\\prime}\\left( x \\right) = e^{x^{2}} \\sin x",
          "f^{\\prime\\prime}\\left( x \\right) = 2x e^{x^{2}} \\sin x + e^{x^{2}} \\cos x",
          "f^{\\prime}\\left( 0 \\right) = 0",
          "f^{\\prime\\prime}\\left( 0 \\right) = 1 > 0",
          "x = 0",
          "f\\left( x \\right)",
          "g^{\\prime}\\left( x \\right) = e^{x^{2}} \\sin x \\cdot \\sin^{2} x + \\int_{0}^{x} e^{t^{2}} \\sin t \\mathrm{~d} t \\cdot 2 \\sin x \\cos x",
          "g^{\\prime}\\left( 0 \\right) = 0"
        ],
        "guide": {
          "concept": "极值看一阶导数变号，拐点看凹凸性改变。老师反复提醒：题目给的是函数图还是导函数图，必须先读清。",
          "method": "求定义域；求一阶导数并列符号表；极值再检查端点。拐点用二阶导数变号验证，不能只凭 f''(x)=0。",
          "pitfall": "驻点不一定是极值点，二阶导数为0也不一定是拐点。最值题不要漏掉区间端点。",
          "extension": "相邻考法包括不等式证明、最优化、切线截距和函数作图。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647810",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=27",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2025-3",
        "year": 2025,
        "number": 3,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "常微分方程",
        "question": "如果对微分方程 \\(y^{\\prime\\prime} - 2a y^{\\prime} + \\left( a + 2 \\right) y = 0\\) 的任一解 \\(y\\left( x \\right)\\)，反常积分 \\(\\int_{0}^{+\\infty} y\\left( x \\right) \\mathrm{~d} x\\) 均收敛，那么 \\(a\\) 的取值范围是\nA. \\(\\left( -2, -1 \\right]\\)\nB. \\(\\left( -\\infty, -1 \\right]\\)\nC. \\(\\left( -2, 0 \\right)\\)\nD. \\(\\left( -\\infty, 0 \\right)\\)",
        "answer": "C",
        "keyFormulas": [
          "r^{2} - 2a r + \\left( a + 2 \\right) = 0",
          "r_{1} r_{2} = a + 2 > 0",
          "r_{1} + r_{2} = 2a < 0",
          "-2 < a < 0"
        ],
        "guide": {
          "concept": "先识别类型：可分离、一阶线性、伯努利、可降阶或二阶常系数。类型判断比直接试算更重要。",
          "method": "齐次部分先解特征方程；非齐次项按形式设特解，若与齐次解共振就乘 x 的适当次幂；最后用初值确定常数。",
          "pitfall": "设特解时多项式次数、指数因子和三角组合都要保留；共振次数漏乘 x 是高频错误。",
          "extension": "相邻考法包括微分方程建模、曲线族和积分方程。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647810",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=27",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2025-4",
        "year": 2025,
        "number": 4,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "等价无穷小与泰勒展开",
        "question": "设函数 \\(f\\left( x \\right)\\)，\\(g\\left( x \\right)\\) 在 \\(x = 0\\) 的某去心邻域内有定义且恒不为零.若当 \\(x \\to 0\\) 时，\\(f\\left( x \\right)\\) 是 \\(g\\left( x \\right)\\) 的高阶无穷小，则当 \\(x \\to 0\\) 时，\nA. \\(f\\left( x \\right) + g\\left( x \\right) = O\\left( g\\left( x \\right) \\right)\\).\nB. \\(f\\left( x \\right) g\\left( x \\right) = o\\left( f^{2}\\left( x \\right) \\right)\\).\nC. \\(f\\left( x \\right) = o\\left( e^{g\\left( x \\right)} - 1 \\right)\\).\nD. \\(f\\left( x \\right) = o\\left( g^{2}\\left( x \\right) \\right)\\).",
        "answer": "C",
        "keyFormulas": [
          "f\\left( x \\right) = o\\left( g\\left( x \\right) \\right)",
          "\\lim_{x \\to 0} \\frac{f\\left( x \\right) + g\\left( x \\right)}{g\\left( x \\right)} = \\lim_{x \\to 0} \\frac{f\\left( x \\right)}{g\\left( x \\right)} + 1 = 1",
          "\\lim_{x \\to 0} \\frac{f\\left( x \\right) g\\left( x \\right)}{f^{2}\\left( x \\right)} = \\lim_{x \\to 0} \\frac{g\\left( x \\right)}{f\\left( x \\right)} = +\\infty",
          "\\lim_{x \\to 0} \\frac{f\\left( x \\right)}{e^{g\\left( x \\right)} - 1} = \\lim_{x \\to 0} \\frac{f\\left( x \\right)}{g\\left( x \\right)} \\cdot \\frac{g\\left( x \\right)}{e^{g\\left( x \\right)} - 1} = 0",
          "\\frac{f\\left( x \\right)}{g^{2}\\left( x \\right)} = \\frac{f\\left( x \\right)}{g\\left( x \\right)} \\cdot \\frac{1}{g\\left( x \\right)}"
        ],
        "guide": {
          "concept": "先看每一项在趋近点附近的最低非零次幂。老师在视频里强调：比较阶数时系数通常不重要，但正负号、幂次和趋近条件绝不能口算带过。",
          "method": "把根式、对数、指数、三角函数逐个换成标准等价式；若相减造成低阶项抵消，就立即改用泰勒展开，写到第一个不为零的项。最后只比较幂指数。",
          "pitfall": "最容易把 1-cos x 与 cos x-1 的符号写反，或在加减结构中违规直接做等价替换。先确认替换对象整体趋于0。",
          "extension": "同一知识点还会考极限值、无穷小阶数排序、参数确定和泰勒系数。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647810",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=27",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2025-5",
        "year": 2025,
        "number": 5,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "二重积分与区域变换",
        "question": "设函数 \\(f\\left( x, y \\right)\\) 连续，则 \\(\\int_{-2}^{2} \\mathrm{~d} x \\int_{4 - x^{2}}^{2} f\\left( x, y \\right) \\mathrm{~d} y =\\)\nA. \\(\\int_{0}^{4} \\left[ \\int_{-2}^{-\\sqrt{4 - y}} f\\left( x, y \\right) \\mathrm{~d} x + \\int_{\\sqrt{4 - y}}^{2} f\\left( x, y \\right) \\mathrm{~d} x \\right] \\mathrm{~d} y\\)\nB. \\(\\int_{0}^{4} \\left[ \\int_{-2}^{\\sqrt{4 - y}} f\\left( x, y \\right) \\mathrm{~d} x + \\int_{\\sqrt{4 - y}}^{2} f\\left( x, y \\right) \\mathrm{~d} x \\right] \\mathrm{~d} y\\)\nC. \\(\\int_{0}^{4} \\left[ \\int_{-2}^{-\\sqrt{4 - y}} f\\left( x, y \\right) \\mathrm{~d} x + \\int_{2}^{\\sqrt{4 - y}} f\\left( x, y \\right) \\mathrm{~d} x \\right] \\mathrm{~d} y\\)\nD. \\(2 \\int_{0}^{4} \\mathrm{~d} y \\int_{\\sqrt{4 - y}}^{2} f\\left( x, y \\right) \\mathrm{~d} x\\)",
        "answer": "A",
        "keyFormulas": [
          "y = 4 - x^{2}",
          "y = 2",
          "y \\in \\left[ 0, 4 \\right]",
          "\\left[ -2, -\\sqrt{4 - y} \\right]",
          "\\left[ \\sqrt{4 - y}, 2 \\right]",
          "\\int_{0}^{4} \\left[ \\int_{-2}^{-\\sqrt{4 - y}} f\\left( x, y \\right) \\mathrm{~d} x + \\int_{\\sqrt{4 - y}}^{2} f\\left( x, y \\right) \\mathrm{~d} x \\right] \\mathrm{~d} y"
        ],
        "guide": {
          "concept": "二重积分先画区域。很多计算错误不是积分不会，而是上下限描述了错误的区域。",
          "method": "标出边界交点；选择先 x 后 y 或先 y 后 x；圆、扇形和只含 x²+y² 的结构优先考虑极坐标，并补上雅可比 r。",
          "pitfall": "交换积分次序必须重新写全部上下限；利用对称性前先检查区域和被积函数奇偶性。",
          "extension": "相邻考法包括体积、质心、变换积分次序和参数区域。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647810",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=27",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2025-6",
        "year": 2025,
        "number": 6,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "综合应用",
        "question": "设单位质点 \\(P\\)，\\(Q\\) 分别位于点 \\(\\left( 0, 0 \\right)\\) 和 \\(\\left( 0, 1 \\right)\\) 处，\\(P\\) 从点 \\(\\left( 0, 0 \\right)\\) 出发沿 \\(x\\) 轴正向移动，记 \\(G\\) 为引力常量，则当质点 \\(P\\) 移动到点 \\(\\left( 1, 0 \\right)\\) 时，克服质点 \\(Q\\) 的引力所做的功为\nA. \\(\\int_{0}^{1} \\frac{G}{x^{2} + 1} \\mathrm{~d} x\\)\nB. \\(\\int_{0}^{1} \\frac{Gx}{\\left( x^{2} + 1 \\right)^{\\frac{3}{2}}} \\mathrm{~d} x\\)\nC. \\(\\int_{0}^{1} \\frac{G}{\\left( x^{2} + 1 \\right)^{\\frac{3}{2}}} \\mathrm{~d} x\\)\nD. \\(\\int_{0}^{1} \\frac{G\\left( x + 1 \\right)}{\\left( x^{2} + 1 \\right)^{\\frac{3}{2}}} \\mathrm{~d} x\\)",
        "answer": "B",
        "keyFormulas": [
          "\\left( x, 0 \\right)",
          "Q P",
          "\\sqrt{x^{2} + 1}",
          "\\frac{G}{x^{2} + 1}",
          "\\frac{G}{x^{2} + 1} \\cdot \\frac{x}{\\sqrt{x^{2} + 1}}",
          "\\int_{0}^{1} \\frac{Gx}{\\left( x^{2} + 1 \\right)^{\\frac{3}{2}}} \\mathrm{~d} x"
        ],
        "guide": {
          "concept": "先判断题目属于高等数学还是线性代数，并把题干中的已知条件、所求对象和限制范围分别圈出。",
          "method": "选择最直接的定义或定理，先写公式，再代条件，保留关键中间步骤，最后用答案反查题意。",
          "pitfall": "不要在读题未完成时开始心算；符号、定义域、单侧条件和矩阵乘法顺序都是高频失分点。",
          "extension": "做完后把本题归入对应专题，再找一道同方法不同外观的题复做。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647810",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=27",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2025-7",
        "year": 2025,
        "number": 7,
        "kind": "单项选择题",
        "subject": "高等数学",
        "topic": "极限计算",
        "question": "设函数 \\(f\\left( x \\right)\\) 连续，给出下列四个条件：\n① \\(\\lim_{x \\to 0} \\frac{\\left| f\\left( x \\right) \\right| - f\\left( 0 \\right)}{x}\\) 存在；\n② \\(\\lim_{x \\to 0} \\frac{f\\left( x \\right) - \\left| f\\left( 0 \\right) \\right|}{x}\\) 存在；\n③ \\(\\lim_{x \\to 0} \\frac{\\left| f\\left( x \\right) \\right|}{x}\\) 存在；\n④ \\(\\lim_{x \\to 0} \\frac{\\left| f\\left( x \\right) \\right| - \\left| f\\left( 0 \\right) \\right|}{x}\\) 存在.\n其中能得到 “\\(f\\left( x \\right)\\) 在 \\(x = 0\\) 处可导” 的条件的个数是\nA. 1\nB. 2\nC. 3\nD. 4",
        "answer": "D",
        "keyFormulas": [
          "\\left| f\\left( 0 \\right) \\right| = f\\left( 0 \\right)",
          "f\\left( 0 \\right) \\ge 0",
          "f\\left( 0 \\right) > 0",
          "x = 0",
          "f\\left( x \\right) > 0",
          "\\left| f\\left( x \\right) \\right| = f\\left( x \\right)",
          "f\\left( 0 \\right) = 0",
          "\\lim_{x \\to 0} \\frac{\\left| f\\left( x \\right) \\right|}{x}"
        ],
        "guide": {
          "concept": "极限题的关键不是一上来求导，而是先判断未定式类型，再选择等价无穷小、洛必达、泰勒、夹逼、单调有界或定积分定义。",
          "method": "第一行写清趋近方向和分子分母的量级；第二行处理主导项；第三行再约分或求导。遇到和式先试定积分定义，遇到递推先找单调性与界。",
          "pitfall": "连续使用洛必达会掩盖结构，也容易在不满足条件时误用。含绝对值、单侧极限和参数时必须分别检查。",
          "extension": "可联动复习无穷小比较、数列极限、函数极限和含参极限。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647810",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=27",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2025-8",
        "year": 2025,
        "number": 8,
        "kind": "单项选择题",
        "subject": "线性代数",
        "topic": "特征值、特征向量与相似",
        "question": "设矩阵 \\(\\boldsymbol{A} = \\begin{pmatrix} 1 & 2 & 0 \\\\ 2 & a & 0 \\\\ 0 & 0 & b \\end{pmatrix}\\) 有一个正特征值和两个负特征值，则\nA. \\(a > 4\\)，\\(b > 0\\)\nB. \\(a < 4\\)，\\(b > 0\\)\nC. \\(a > 4\\)，\\(b < 0\\)\nD. \\(a < 4\\)，\\(b < 0\\)",
        "answer": "D",
        "keyFormulas": [
          "\\left| \\lambda \\boldsymbol{E} - \\boldsymbol{A} \\right| = \\left( b - \\lambda \\right)\\left[ \\lambda^{2} - \\left( a + 1 \\right)\\lambda + a - 4 \\right]",
          "a - 4 < 0",
          "a < 4"
        ],
        "guide": {
          "concept": "先用特征方程找特征值，再解 (A-λE)x=0。能否对角化取决于线性无关特征向量是否足够。",
          "method": "利用迹、行列式和已知特征向量简化；分别求每个特征值的特征子空间维数；按列组成 P，并保持特征值顺序一致。",
          "pitfall": "重特征值不等于一定不能对角化；相似矩阵特征值相同，但反过来不一定相似。",
          "extension": "相邻考法包括矩阵幂、二次型正交变换和实对称矩阵。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647810",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=27",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2025-9",
        "year": 2025,
        "number": 9,
        "kind": "单项选择题",
        "subject": "线性代数",
        "topic": "行列式与矩阵运算",
        "question": "下列矩阵中，可以经过若干初等变换得到矩阵 \\(\\begin{pmatrix} 1 & 1 & 0 & 1 \\\\ 0 & 0 & 1 & 2 \\\\ 0 & 0 & 0 & 0 \\end{pmatrix}\\) 的是\nA. \\(\\begin{pmatrix} 1 & 1 & 0 & 1 \\\\ 1 & 2 & 1 & 3 \\\\ 2 & 3 & 1 & 4 \\end{pmatrix}\\)\nB. \\(\\begin{pmatrix} 1 & 1 & 0 & 1 \\\\ 1 & 1 & 2 & 5 \\\\ 1 & 1 & 1 & 3 \\end{pmatrix}\\)\nC. \\(\\begin{pmatrix} 1 & 0 & 0 & 1 \\\\ 0 & 1 & 0 & 3 \\\\ 0 & 1 & 0 & 0 \\end{pmatrix}\\)\nD. \\(\\begin{pmatrix} 1 & 1 & 2 & 3 \\\\ 1 & 2 & 2 & 3 \\\\ 2 & 3 & 4 & 6 \\end{pmatrix}\\)",
        "answer": "B",
        "keyFormulas": [
          "\\begin{pmatrix} 1 & 1 & 0 & 1 \\\\ 1 & 1 & 2 & 5 \\\\ 1 & 1 & 1 & 3 \\end{pmatrix} \\to \\begin{pmatrix} 1 & 1 & 0 & 1 \\\\ 0 & 0 & 1 & 2 \\\\ 0 & 0 & 0 & 0 \\end{pmatrix}"
        ],
        "guide": {
          "concept": "矩阵题先看题目要求的是数值、秩、可逆性还是结构关系。矩阵乘法不能交换顺序。",
          "method": "优先使用初等变换、分块、A·A* = |A|E、可逆矩阵保持秩等性质，避免无目的展开。",
          "pitfall": "行变换与列变换对行列式的影响不同；矩阵等式中左右乘同一矩阵也要保持位置。",
          "extension": "相邻考法包括秩、方程组、特征值和相似。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647810",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=27",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2025-10",
        "year": 2025,
        "number": 10,
        "kind": "单项选择题",
        "subject": "线性代数",
        "topic": "线性方程组",
        "question": "设 3 阶矩阵 \\(\\boldsymbol{A}\\)，\\(\\boldsymbol{B}\\) 满足 \\(r\\left( \\boldsymbol{A}\\boldsymbol{B} \\right) = r\\left( \\boldsymbol{B}\\boldsymbol{A} \\right) + 1\\)，则\nA. 方程组 \\(\\left( \\boldsymbol{A} + \\boldsymbol{B} \\right)\\boldsymbol{x} = 0\\) 只有零解.\nB. 方程组 \\(\\boldsymbol{A}\\boldsymbol{x} = 0\\) 与方程组 \\(\\boldsymbol{B}\\boldsymbol{x} = 0\\) 均只有零解.\nC. 方程组 \\(\\boldsymbol{A}\\boldsymbol{x} = 0\\) 与方程组 \\(\\boldsymbol{B}\\boldsymbol{x} = 0\\) 没有公共非零解.\nD. 方程组 \\(\\boldsymbol{A}\\boldsymbol{B}\\boldsymbol{A}\\boldsymbol{x} = 0\\) 与方程组 \\(\\boldsymbol{B}\\boldsymbol{A}\\boldsymbol{B}\\boldsymbol{x} = 0\\) 有公共非零解.",
        "answer": "D",
        "keyFormulas": [
          "\\boldsymbol{A} = \\begin{pmatrix} 1 & 1 & 1 \\\\ -1 & -1 & -1 \\\\ 0 & 0 & 0 \\end{pmatrix}",
          "\\boldsymbol{B} = \\begin{pmatrix} 1 & 1 & 1 \\\\ 1 & 1 & 1 \\\\ 1 & 1 & 1 \\end{pmatrix}",
          "\\boldsymbol{A}\\boldsymbol{B} = \\begin{pmatrix} 3 & 3 & 3 \\\\ -3 & -3 & -3 \\\\ 0 & 0 & 0 \\end{pmatrix}",
          "\\boldsymbol{B}\\boldsymbol{A} = \\begin{pmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{pmatrix}",
          "r\\left( \\boldsymbol{A}\\boldsymbol{B} \\right) = 1",
          "r\\left( \\boldsymbol{B}\\boldsymbol{A} \\right) = 0",
          "\\left( \\boldsymbol{A} + \\boldsymbol{B} \\right)\\boldsymbol{x} = 0",
          "\\boldsymbol{A}\\boldsymbol{x} = 0"
        ],
        "guide": {
          "concept": "方程组先比较系数矩阵秩 r(A) 与增广矩阵秩 r(A,b)，再讨论无解、唯一解或无穷多解。",
          "method": "对增广矩阵做初等行变换；确定主元和自由变量；非齐次通解=一个特解+齐次方程通解。",
          "pitfall": "有参数时秩可能分情况变化；不要只看行列式为0就直接断言无解。",
          "extension": "相邻考法包括公共解、同解方程组与矩阵秩。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647810",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=27",
        "videoExtraUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=31"
      },
      {
        "id": "math2-2025-11",
        "year": 2025,
        "number": 11,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "一元积分",
        "question": "设 \\(\\int_{1}^{+\\infty} \\frac{a}{x\\left( 2x + a \\right)} \\mathrm{~d} x = \\ln 2\\)，则 \\(a =\\) ________.",
        "answer": "\\(2\\)",
        "keyFormulas": [
          "\\frac{a}{x\\left( 2x + a \\right)} = \\frac{1}{x} - \\frac{2}{2x + a}",
          "\\int_{1}^{+\\infty} \\frac{a}{x\\left( 2x + a \\right)} \\mathrm{~d} x = \\left. \\ln \\frac{2x}{2x + a} \\right|_{1}^{+\\infty} = \\ln \\left| \\frac{2 + a}{2} \\right|",
          "\\ln \\left| \\frac{2 + a}{2} \\right| = \\ln 2",
          "\\left| \\frac{2 + a}{2} \\right| = 2",
          "a = 2",
          "a = -6",
          "\\left[ 1, +\\infty \\right)"
        ],
        "guide": {
          "concept": "先看结构再选方法：复合函数配导数用换元，乘积中一项求导变简单用分部积分，有理函数先做代数分解。",
          "method": "写出换元变量与新上下限；反常积分先把瑕点或无穷端点改写成极限；变上限积分先用微积分基本定理求导。",
          "pitfall": "不定积分别漏常数C；分段函数的原函数在分段点还必须连续；反常积分算出原函数不等于已经收敛，必须看极限。",
          "extension": "相邻考法包括积分比较、面积体积、积分不等式和含参积分。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647810",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=27",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2025-12",
        "year": 2025,
        "number": 12,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "极限计算",
        "question": "曲线 \\(y = \\sqrt[3]{x^{3} - 3x^{2} + 1}\\) 的渐近线方程为 ________.",
        "answer": "\\(y = x - 1\\)",
        "keyFormulas": [
          "\\lim_{x \\to +\\infty} \\frac{y}{x} = \\lim_{x \\to +\\infty} \\frac{\\sqrt[3]{x^{3} - 3x^{2} + 1}}{x} = 1",
          "\\lim_{x \\to +\\infty} \\left( y - x \\right) = \\lim_{x \\to +\\infty} \\left( \\sqrt[3]{x^{3} - 3x^{2} + 1} - x \\right) = -1",
          "y = x - 1"
        ],
        "guide": {
          "concept": "极限题的关键不是一上来求导，而是先判断未定式类型，再选择等价无穷小、洛必达、泰勒、夹逼、单调有界或定积分定义。",
          "method": "第一行写清趋近方向和分子分母的量级；第二行处理主导项；第三行再约分或求导。遇到和式先试定积分定义，遇到递推先找单调性与界。",
          "pitfall": "连续使用洛必达会掩盖结构，也容易在不满足条件时误用。含绝对值、单侧极限和参数时必须分别检查。",
          "extension": "可联动复习无穷小比较、数列极限、函数极限和含参极限。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647810",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=27",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2025-13",
        "year": 2025,
        "number": 13,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "极限计算",
        "question": "\\(\\lim_{n \\to \\infty} \\frac{1}{n^{2}} \\left[ \\ln \\frac{1}{n} + 2 \\ln \\frac{2}{n} + \\cdots + \\left( n - 1 \\right) \\ln \\frac{n - 1}{n} \\right] =\\) ________.",
        "answer": "\\(-\\frac{1}{4}\\)",
        "keyFormulas": [
          "\\lim_{n \\to \\infty} \\sum_{k = 1}^{n - 1} \\frac{k}{n} \\ln \\frac{k}{n} \\cdot \\frac{1}{n}",
          "x \\ln x",
          "\\left[ 0, 1 \\right]",
          "\\lim_{n \\to \\infty} \\sum_{k = 1}^{n - 1} \\frac{k}{n} \\ln \\frac{k}{n} \\cdot \\frac{1}{n} = \\int_{0}^{1} x \\ln x \\mathrm{~d} x = -\\frac{1}{4}"
        ],
        "guide": {
          "concept": "极限题的关键不是一上来求导，而是先判断未定式类型，再选择等价无穷小、洛必达、泰勒、夹逼、单调有界或定积分定义。",
          "method": "第一行写清趋近方向和分子分母的量级；第二行处理主导项；第三行再约分或求导。遇到和式先试定积分定义，遇到递推先找单调性与界。",
          "pitfall": "连续使用洛必达会掩盖结构，也容易在不满足条件时误用。含绝对值、单侧极限和参数时必须分别检查。",
          "extension": "可联动复习无穷小比较、数列极限、函数极限和含参极限。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647810",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=27",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2025-14",
        "year": 2025,
        "number": 14,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "综合应用",
        "question": "已知函数 \\(y = y\\left( x \\right)\\) 由 \\(\\left\\{ \\begin{aligned} x &= \\ln \\left( 1 + 2t \\right), \\\\ 2t - \\int_{1}^{y + t^{2}} e^{-u^{2}} \\mathrm{~d} u &= 0 \\end{aligned} \\right.\\)\n确定，则 \\(\\left. \\frac{\\mathrm{d} y}{\\mathrm{d} x} \\right|_{x = 0} =\\) ________.",
        "answer": "\\(e\\)",
        "keyFormulas": [
          "t = 0",
          "y = 1",
          "2t - \\int_{1}^{y + t^{2}} e^{-u^{2}} \\mathrm{~d} u = 0",
          "2 - e^{-\\left( y + t^{2} \\right)^{2}}\\left( \\frac{\\mathrm{d} y}{\\mathrm{d} t} + 2t \\right) = 0",
          "\\left. \\frac{\\mathrm{d} y}{\\mathrm{d} t} \\right|_{t = 0} = 2e",
          "\\frac{\\mathrm{d} x}{\\mathrm{d} t} = \\frac{2}{1 + 2t}",
          "\\left. \\frac{\\mathrm{d} x}{\\mathrm{d} t} \\right|_{t = 0} = 2",
          "\\left. \\frac{\\mathrm{d} y}{\\mathrm{d} x} \\right|_{x = 0} = \\frac{\\left. \\frac{\\mathrm{d} y}{\\mathrm{d} t} \\right|_{t = 0}}{\\left. \\frac{\\mathrm{d} x}{\\mathrm{d} t} \\right|_{t = 0}} = e"
        ],
        "guide": {
          "concept": "先判断题目属于高等数学还是线性代数，并把题干中的已知条件、所求对象和限制范围分别圈出。",
          "method": "选择最直接的定义或定理，先写公式，再代条件，保留关键中间步骤，最后用答案反查题意。",
          "pitfall": "不要在读题未完成时开始心算；符号、定义域、单侧条件和矩阵乘法顺序都是高频失分点。",
          "extension": "做完后把本题归入对应专题，再找一道同方法不同外观的题复做。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647810",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=27",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2025-15",
        "year": 2025,
        "number": 15,
        "kind": "填空题",
        "subject": "高等数学",
        "topic": "常微分方程",
        "question": "微分方程 \\(\\left( 2y - 3x \\right) \\mathrm{d} x + \\left( 2x - 5y \\right) \\mathrm{d} y = 0\\) 满足条件 \\(y\\left( 1 \\right) = 1\\) 的解为 ________.",
        "answer": "\\(5y^{2} - 4xy + 3x^{2} = 4\\)",
        "keyFormulas": [
          "\\frac{\\mathrm{d} y}{\\mathrm{d} x} = \\frac{2y - 3x}{5y - 2x} = \\frac{2 \\frac{y}{x} - 3}{5 \\frac{y}{x} - 2}",
          "\\frac{y}{x} = u",
          "y = ux",
          "u + x \\frac{\\mathrm{d} u}{\\mathrm{d} x} = \\frac{2u - 3}{5u - 2}",
          "\\frac{5u - 2}{5u^{2} - 4u + 3} \\mathrm{d} u = -\\frac{1}{x} \\mathrm{d} x",
          "5u^{2} - 4u + 3 = \\frac{C}{x^{2}}",
          "5y^{2} - 4xy + 3x^{2} = C",
          "y\\left( 1 \\right) = 1"
        ],
        "guide": {
          "concept": "先识别类型：可分离、一阶线性、伯努利、可降阶或二阶常系数。类型判断比直接试算更重要。",
          "method": "齐次部分先解特征方程；非齐次项按形式设特解，若与齐次解共振就乘 x 的适当次幂；最后用初值确定常数。",
          "pitfall": "设特解时多项式次数、指数因子和三角组合都要保留；共振次数漏乘 x 是高频错误。",
          "extension": "相邻考法包括微分方程建模、曲线族和积分方程。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647810",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=27",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2025-16",
        "year": 2025,
        "number": 16,
        "kind": "填空题",
        "subject": "线性代数",
        "topic": "线性方程组",
        "question": "设矩阵 \\(\\boldsymbol{A} = \\left( \\boldsymbol{\\alpha}_{1}, \\boldsymbol{\\alpha}_{2}, \\boldsymbol{\\alpha}_{3}, \\boldsymbol{\\alpha}_{4} \\right)\\).若 \\(\\boldsymbol{\\alpha}_{1}\\)，\\(\\boldsymbol{\\alpha}_{2}\\)，\\(\\boldsymbol{\\alpha}_{3}\\) 线性无关，且 \\(\\boldsymbol{\\alpha}_{1} + \\boldsymbol{\\alpha}_{2} = \\boldsymbol{\\alpha}_{3} + \\boldsymbol{\\alpha}_{4}\\)，则方程组 \\(\\boldsymbol{A}\\boldsymbol{x} = \\boldsymbol{\\alpha}_{1} + 4\\boldsymbol{\\alpha}_{4}\\) 的通解为 ________.",
        "answer": "\\(\\boldsymbol{x} = k \\begin{pmatrix} 1 \\\\ 1 \\\\ -1 \\\\ -1 \\end{pmatrix} + \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\\\ 4 \\end{pmatrix}\\)",
        "keyFormulas": [
          "\\boldsymbol{\\alpha}_{1} + \\boldsymbol{\\alpha}_{2} = \\boldsymbol{\\alpha}_{3} + \\boldsymbol{\\alpha}_{4}",
          "\\boldsymbol{\\alpha}_{4} = \\boldsymbol{\\alpha}_{1} + \\boldsymbol{\\alpha}_{2} - \\boldsymbol{\\alpha}_{3}",
          "r\\left( \\boldsymbol{A} \\right) = r\\left( \\boldsymbol{\\alpha}_{1}, \\boldsymbol{\\alpha}_{2}, \\boldsymbol{\\alpha}_{3} \\right) = 3",
          "\\boldsymbol{A}\\boldsymbol{x} = \\boldsymbol{0}",
          "\\left( 1, 1, -1, -1 \\right)^{\\mathrm{T}}",
          "\\left( 1, 0, 0, 4 \\right)^{\\mathrm{T}}",
          "\\boldsymbol{A}\\boldsymbol{x} = \\boldsymbol{\\alpha}_{1} + 4\\boldsymbol{\\alpha}_{4}",
          "\\boldsymbol{x} = k \\begin{pmatrix} 1 \\\\ 1 \\\\ -1 \\\\ -1 \\end{pmatrix} + \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\\\ 4 \\end{pmatrix}"
        ],
        "guide": {
          "concept": "方程组先比较系数矩阵秩 r(A) 与增广矩阵秩 r(A,b)，再讨论无解、唯一解或无穷多解。",
          "method": "对增广矩阵做初等行变换；确定主元和自由变量；非齐次通解=一个特解+齐次方程通解。",
          "pitfall": "有参数时秩可能分情况变化；不要只看行列式为0就直接断言无解。",
          "extension": "相邻考法包括公共解、同解方程组与矩阵秩。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647810",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=27",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2025-17",
        "year": 2025,
        "number": 17,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "综合应用",
        "question": "（本题满分 10 分）\n计算 \\(\\int_{0}^{1} \\frac{1}{\\left( x + 1 \\right)\\left( x^{2} - 2x + 2 \\right)} \\mathrm{~d} x\\).",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "\\frac{1}{\\left( 1 + x \\right)\\left( x^{2} - 2x + 2 \\right)} = \\frac{a}{1 + x} + \\frac{bx + c}{x^{2} - 2x + 2}",
          "\\left\\{ \\begin{aligned} a + b &= 0, \\\\ -2a + b + c &= 0, \\\\ 2a + c &= 1 \\end{aligned} \\right.",
          "a = \\frac{1}{5}",
          "b = -\\frac{1}{5}",
          "c = \\frac{3}{5}",
          "= \\int_{0}^{1} \\left[ \\frac{1}{5\\left( 1 + x \\right)} + \\frac{-\\frac{1}{5}x + \\frac{3}{5}}{x^{2} - 2x + 2} \\right] \\mathrm{~d} x",
          "= \\frac{1}{5}\\ln \\left( 1 + x \\right)\\Big|_{0}^{1} - \\frac{1}{5} \\int_{0}^{1} \\frac{x - 3}{x^{2} - 2x + 2} \\mathrm{~d} x",
          "= \\frac{1}{5}\\ln 2 - \\frac{1}{5} \\left[ \\frac{1}{2} \\int_{0}^{1} \\frac{1}{x^{2} - 2x + 2} \\mathrm{d} \\left( x^{2} - 2x + 2 \\right) - \\int_{0}^{1} \\frac{2}{x^{2} - 2x + 2} \\mathrm{~d} x \\right]"
        ],
        "guide": {
          "concept": "先判断题目属于高等数学还是线性代数，并把题干中的已知条件、所求对象和限制范围分别圈出。",
          "method": "选择最直接的定义或定理，先写公式，再代条件，保留关键中间步骤，最后用答案反查题意。",
          "pitfall": "不要在读题未完成时开始心算；符号、定义域、单侧条件和矩阵乘法顺序都是高频失分点。",
          "extension": "做完后把本题归入对应专题，再找一道同方法不同外观的题复做。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647810",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=27",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2025-18",
        "year": 2025,
        "number": 18,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "中值定理与零点证明",
        "question": "（本题满分 12 分）\n设函数 \\(f\\left( x \\right)\\) 在 \\(x = 0\\) 处连续，且 \\(\\lim_{x \\to 0} \\frac{x f\\left( x \\right) - e^{2 \\sin x} + 1}{\\ln \\left( 1 + x \\right) + \\ln \\left( 1 - x \\right)} = -3\\)，证明 \\(f\\left( x \\right)\\) 在 \\(x = 0\\) 处可导，并求 \\(f^{\\prime}\\left( 0 \\right)\\).",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "\\ln \\left( 1 + x \\right) + \\ln \\left( 1 - x \\right) = \\ln \\left( 1 - x^{2} \\right)",
          "-3 = \\lim_{x \\to 0} \\frac{x f\\left( x \\right) - e^{2 \\sin x} + 1}{-x^{2}}",
          "-3 = \\lim_{x \\to 0} \\frac{f\\left( x \\right) + \\frac{1 - e^{2 \\sin x}}{x}}{-x}",
          "\\lim_{x \\to 0} \\frac{1 - e^{2 \\sin x}}{x} = -2",
          "f\\left( x \\right)",
          "x = 0",
          "f\\left( 0 \\right) = 2",
          "-3 = \\lim_{x \\to 0} \\frac{x\\left[ f\\left( x \\right) - f\\left( 0 \\right) \\right] + 2x - e^{2 \\sin x} + 1}{-x^{2}}"
        ],
        "guide": {
          "concept": "存在性证明的核心是‘构造谁、在哪个区间用哪个定理’。目标式通常提示辅助函数的导数形式。",
          "method": "先用连续性和端点异号找零点；再根据目标式反推辅助函数。罗尔定理要逐项核对闭区间连续、开区间可导、端点函数值相等。",
          "pitfall": "只写‘由罗尔定理可得’但不说明区间与条件会丢步骤分；多个根要使用互不重叠的区间。",
          "extension": "常与积分中值定理、柯西中值定理、零点个数和不等式结合。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647810",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=27",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2025-19",
        "year": 2025,
        "number": 19,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "多元函数微分",
        "question": "（本题满分 12 分）\n设函数 \\(f\\left( x, y \\right)\\) 可微且满足 \\(\\mathrm{d} f\\left( x, y \\right) = -2x e^{-y} \\mathrm{d} x + e^{-y}\\left( x^{2} - y - 1 \\right) \\mathrm{d} y\\)，\\(f\\left( 0, 0 \\right) = 2\\)，求 \\(f\\left( x, y \\right)\\)，并求 \\(f\\left( x, y \\right)\\) 的极值.",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "f_{x}^{\\prime}\\left( x, y \\right) = -2x e^{-y}",
          "f_{y}^{\\prime}\\left( x, y \\right) = e^{-y}\\left( x^{2} - y - 1 \\right)",
          "f\\left( x, y \\right) = \\int -2x e^{-y} \\mathrm{~d} x = -x^{2} e^{-y} + C\\left( y \\right)",
          "f_{y}^{\\prime}\\left( x, y \\right) = x^{2} e^{-y} + C^{\\prime}\\left( y \\right) = e^{-y}\\left( x^{2} - y - 1 \\right)",
          "C^{\\prime}\\left( y \\right) = -\\left( y + 1 \\right)e^{-y}",
          "C\\left( y \\right) = \\left( y + 2 \\right)e^{-y} + C",
          "f\\left( x, y \\right) = -x^{2} e^{-y} + \\left( y + 2 \\right)e^{-y} + C",
          "f\\left( 0, 0 \\right) = 2"
        ],
        "guide": {
          "concept": "多元题先区分偏导数、方向导数、全微分和复合函数链式法则。偏导存在不自动推出连续或可微。",
          "method": "画依赖关系：外层变量对中间变量求偏导，中间变量再对自变量求导；每条路径的乘积相加。指定点最后再代入。",
          "pitfall": "二阶混合偏导只有在相应连续条件下才能随意交换次序；沿坐标轴极限不能代替二元极限。",
          "extension": "相邻考法包括极值、条件极值、切平面与法线。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647810",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=27",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2025-20",
        "year": 2025,
        "number": 20,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "二重积分与区域变换",
        "question": "（本题满分 12 分）\n已知平面有界区域 \\(D = \\left\\{ \\left( x, y \\right) \\mid x^{2} + y^{2} \\le 4x,\\ x^{2} + y^{2} \\le 4y \\right\\}\\)，计算 \\(\\iint_{D} \\left( x - y \\right)^{2} \\mathrm{d} x \\mathrm{d} y\\).",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "y = x",
          "D_{1}",
          "\\iint_{D} \\left( x - y \\right)^{2} \\mathrm{d} x \\mathrm{d} y = 2 \\iint_{D_{1}} \\left( x^{2} + y^{2} - 2xy \\right) \\mathrm{d} x \\mathrm{d} y",
          "x = r \\cos \\theta",
          "y = r \\sin \\theta",
          "0 \\le \\theta \\le \\frac{\\pi}{4}",
          "0 \\le r \\le 4 \\sin \\theta",
          "\\iint_{D} \\left( x - y \\right)^{2} \\mathrm{d} x \\mathrm{d} y = 2 \\int_{0}^{\\frac{\\pi}{4}} \\mathrm{~d} \\theta \\int_{0}^{4 \\sin \\theta} \\left( r^{2} - 2r^{2} \\cos \\theta \\sin \\theta \\right) r \\mathrm{~d} r"
        ],
        "guide": {
          "concept": "二重积分先画区域。很多计算错误不是积分不会，而是上下限描述了错误的区域。",
          "method": "标出边界交点；选择先 x 后 y 或先 y 后 x；圆、扇形和只含 x²+y² 的结构优先考虑极坐标，并补上雅可比 r。",
          "pitfall": "交换积分次序必须重新写全部上下限；利用对称性前先检查区域和被积函数奇偶性。",
          "extension": "相邻考法包括体积、质心、变换积分次序和参数区域。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647810",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=27",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2025-21",
        "year": 2025,
        "number": 21,
        "kind": "解答题",
        "subject": "高等数学",
        "topic": "中值定理与零点证明",
        "question": "（本题满分 12 分）\n设函数 \\(f\\left( x \\right)\\) 在区间 \\(\\left( a, b \\right)\\) 内可导，证明：导函数 \\(f^{\\prime}\\left( x \\right)\\) 在 \\(\\left( a, b \\right)\\) 内严格单调递增的充分必要条件是：对 \\(\\left( a, b \\right)\\) 内任意的 \\(x_{1}\\)，\\(x_{2}\\)，\\(x_{3}\\)，当 \\(x_{1} < x_{2} < x_{3}\\) 时，有\n\\(\\frac{f\\left( x_{2} \\right) - f\\left( x_{1} \\right)}{x_{2} - x_{1}} < \\frac{f\\left( x_{3} \\right) - f\\left( x_{2} \\right)}{x_{3} - x_{2}}\\).",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "\\xi_{1} \\in \\left( x_{1}, x_{2} \\right)",
          "\\xi_{2} \\in \\left( x_{2}, x_{3} \\right)",
          "\\frac{f\\left( x_{2} \\right) - f\\left( x_{1} \\right)}{x_{2} - x_{1}} = f^{\\prime}\\left( \\xi_{1} \\right)",
          "\\frac{f\\left( x_{3} \\right) - f\\left( x_{2} \\right)}{x_{3} - x_{2}} = f^{\\prime}\\left( \\xi_{2} \\right)",
          "f^{\\prime}\\left( x \\right)",
          "\\left( a, b \\right)",
          "\\xi_{1} < \\xi_{2}",
          "f^{\\prime}\\left( \\xi_{1} \\right) < f^{\\prime}\\left( \\xi_{2} \\right)"
        ],
        "guide": {
          "concept": "存在性证明的核心是‘构造谁、在哪个区间用哪个定理’。目标式通常提示辅助函数的导数形式。",
          "method": "先用连续性和端点异号找零点；再根据目标式反推辅助函数。罗尔定理要逐项核对闭区间连续、开区间可导、端点函数值相等。",
          "pitfall": "只写‘由罗尔定理可得’但不说明区间与条件会丢步骤分；多个根要使用互不重叠的区间。",
          "extension": "常与积分中值定理、柯西中值定理、零点个数和不等式结合。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647810",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=27",
        "videoExtraUrl": ""
      },
      {
        "id": "math2-2025-22",
        "year": 2025,
        "number": 22,
        "kind": "解答题",
        "subject": "线性代数",
        "topic": "二次型",
        "question": "（本题满分 12 分）\n已知矩阵\n\\(\\boldsymbol{A} = \\begin{pmatrix} 4 & 1 & -2 \\\\ 1 & 1 & 1 \\\\ -2 & 1 & a \\end{pmatrix}\\)，\n\\(\\boldsymbol{B} = \\begin{pmatrix} k & 0 & 0 \\\\ 0 & 6 & 0 \\\\ 0 & 0 & 0 \\end{pmatrix}\\)\n合同.\n求 \\(a\\) 的值及 \\(k\\) 的取值范围；\n若存在正交矩阵 \\(\\boldsymbol{Q}\\)，使得 \\(\\boldsymbol{Q}^{\\mathrm{T}} \\boldsymbol{A} \\boldsymbol{Q} = \\boldsymbol{B}\\)，求 \\(k\\) 及 \\(\\boldsymbol{Q}\\).",
        "answer": "详见关键步骤",
        "keyFormulas": [
          "\\boldsymbol{A}",
          "\\boldsymbol{B}",
          "\\left| \\boldsymbol{A} \\right| = 0",
          "a = 4",
          "k > 0",
          "\\boldsymbol{Q}",
          "\\boldsymbol{Q}^{\\mathrm{T}} \\boldsymbol{A} \\boldsymbol{Q} = \\boldsymbol{B}",
          "k = 3"
        ],
        "guide": {
          "concept": "二次型先写对称矩阵，交叉项 2aᵢⱼxᵢxⱼ 对应矩阵中的 aᵢⱼ，而不是2aᵢⱼ。",
          "method": "配方法用于一般可逆线性变换；实对称矩阵正交对角化用特征值和单位正交特征向量；正定性可用顺序主子式。",
          "pitfall": "标准形系数与特征值只在正交变换下直接对应；规范形只保留正负号和零。",
          "extension": "相邻考法包括合同、惯性指数和矩阵正定性。"
        },
        "sourceUrl": "https://www.cnblogs.com/zhaokaifeng/p/20647810",
        "videoUrl": "https://www.bilibili.com/video/BV1rVYdzoEUZ/?p=27",
        "videoExtraUrl": ""
      }
    ]
  }
];
