// Machine Learning Course Data - ES5 compatible
var chapterDetails = [
  {
    title: "第1-30集：Python数据分析基础 - Pandas与Numpy实战",
    sections: [
      {
        heading: "📖 内容概述",
        content: "<p>这是整个机器学习教程的开篇，共30集，系统讲解Python在数据分析领域的核心工具库。从Anaconda环境搭建开始，逐步深入Numpy数值计算和Pandas数据处理两大核心工具，是后续所有机器学习算法学习的基础。</p>"
      },
      {
        heading: "🎯 核心知识点",
        list: [
          "Anaconda安装与Jupyter Notebook使用",
          "Python基础语法回顾：变量、数据类型、循环、函数",
          "Numpy：ndarray数组创建、索引切片、形状变换、广播机制、数学运算",
          "Pandas：Series与DataFrame数据结构、数据读取(CSV/Excel)",
          "数据清洗：缺失值处理、重复值删除、数据类型转换",
          "数据筛选：loc/iloc索引、条件过滤、排序排名",
          "分组聚合：groupby分组、聚合函数apply/agg/transform",
          "数据合并：merge连接、concat拼接、join关联",
          "透视表pivot_table与交叉表crosstab",
          "时间序列处理：resample重采样、滑动窗口"
        ]
      },
      {
        heading: "💻 代码示例",
        code: '<span class="code-comment"># 导入核心库</span>\n<span class="code-keyword">import</span> numpy <span class="code-keyword">as</span> np\n<span class="code-keyword">import</span> pandas <span class="code-keyword">as</span> pd\n\n<span class="code-comment"># 创建DataFrame</span>\ndf = pd.DataFrame({\n    <span class="code-string">\'A\'</span>: np.random.randn(5),\n    <span class="code-string">\'B\'</span>: [<span class="code-string">\'foo\'</span>, <span class="code-string">\'bar\'</span>, <span class="code-string">\'foo\'</span>, <span class="code-string">\'bar\'</span>, <span class="code-string">\'foo\'</span>],\n    <span class="code-string">\'C\'</span>: np.random.randint(0, 100, 5)\n})\n\n<span class="code-comment"># 分组聚合计算</span>\nresult = df.groupby(<span class="code-string">\'B\'</span>).agg({\n    <span class="code-string">\'A\'</span>: <span class="code-string">\'mean\'</span>,\n    <span class="code-string">\'C\'</span>: [<span class="code-string">\'sum\'</span>, <span class="code-string">\'max\'</span>]\n})\n<span class="code-keyword">print</span>(result)'
      },
      {
        heading: "💡 学习建议",
        content: "<p>这部分是基本功，建议每段代码都亲手敲一遍，不要只看视频。Pandas功能非常丰富，重点掌握数据读写、筛选、分组、合并这四个高频操作。学完后建议找一份真实数据集(如Kaggle上的Titanic)做一次完整的探索性数据分析(EDA)练习。</p>"
      }
    ]
  },
  {
    title: "第31-50集：K-近邻算法(KNN) - 原理与实战",
    sections: [
      {
        heading: "📖 内容概述",
        content: "<p>K-近邻是机器学习入门的第一个算法，思想简单直观：\"近朱者赤，近墨者黑\"。教程从距离度量开始，详细讲解KNN的分类/回归原理、K值选择、kd树优化、数据归一化等关键问题，并通过鸢尾花分类、手写数字识别等案例实战。</p>"
      },
      {
        heading: "🎯 核心知识点",
        list: [
          "KNN基本思想：投票法分类，平均法回归",
          "距离度量：欧氏距离、曼哈顿距离、闵可夫斯基距离",
          "K值的影响：K太小容易过拟合，K太大容易欠拟合",
          "特征归一化/标准化的必要性：消除量纲影响",
          "kd树构建与搜索：提升KNN预测效率",
          "KNN优缺点分析与适用场景",
          "scikit-learn中KNeighborsClassifier的使用",
          "鸢尾花(Iris)数据集分类实战",
          "交叉验证选择最优K值",
          "KNN用于回归问题(KNeighborsRegressor)"
        ]
      },
      {
        heading: "💻 代码示例",
        code: '<span class="code-keyword">from</span> sklearn.neighbors <span class="code-keyword">import</span> KNeighborsClassifier\n<span class="code-keyword">from</span> sklearn.datasets <span class="code-keyword">import</span> load_iris\n<span class="code-keyword">from</span> sklearn.model_selection <span class="code-keyword">import</span> train_test_split\n<span class="code-keyword">from</span> sklearn.preprocessing <span class="code-keyword">import</span> StandardScaler\n<span class="code-keyword">from</span> sklearn.metrics <span class="code-keyword">import</span> accuracy_score\n\n<span class="code-comment"># 加载数据</span>\niris = load_iris()\nX_train, X_test, y_train, y_test = train_test_split(\n    iris.data, iris.target, test_size=<span class="code-string">0.2</span>, random_state=<span class="code-string">42</span>\n)\n\n<span class="code-comment"># 特征标准化</span>\nscaler = StandardScaler()\nX_train_scaled = scaler.fit_transform(X_train)\nX_test_scaled = scaler.transform(X_test)\n\n<span class="code-comment"># 训练KNN模型</span>\nknn = KNeighborsClassifier(n_neighbors=<span class="code-string">5</span>)\nknn.fit(X_train_scaled, y_train)\n\n<span class="code-comment"># 预测评估</span>\ny_pred = knn.predict(X_test_scaled)\n<span class="code-keyword">print</span>("准确率: {:.2f}".format(accuracy_score(y_test, y_pred)))'
      },
      {
        heading: "💡 学习建议",
        content: "<p>KNN是理解机器学习基本流程的绝佳起点：数据加载→训练测试划分→特征预处理→模型训练→预测→评估。建议自己动手实现一个简单的KNN(不用sklearn)，加深对距离计算和投票机制的理解。思考：为什么KNN需要特征缩放？kd树在什么情况下会失效？</p>"
      }
    ]
  },
  {
    title: "第51-75集：线性回归 - 从最小二乘到梯度下降",
    sections: [
      {
        heading: "📖 内容概述",
        content: "<p>线性回归是回归问题的基础算法，也是理解很多复杂模型的起点。教程从简单线性回归到多元线性回归，从最小二乘法的数学推导到梯度下降优化算法，再到多项式回归和正则化，内容层层递进，配合加州房价预测实战。</p>"
      },
      {
        heading: "🎯 核心知识点",
        list: [
          "简单线性回归：y = wx + b，最小化均方误差",
          "最小二乘法：正规方程推导与求解",
          "多元线性回归：矩阵形式表达",
          "梯度下降法：BGD/SGD/MBGD三种变体",
          "学习率的选择与收敛判断",
          "多项式回归：特征升维拟合非线性关系",
          "正则化：L1正则化(Lasso)产生稀疏解",
          "L2正则化(Ridge)防止过拟合",
          "线性回归的评估指标：MSE/RMSE/MAE/R²",
          "加州房价预测完整实战流程"
        ]
      },
      {
        heading: "💻 代码示例",
        code: '<span class="code-keyword">from</span> sklearn.linear_model <span class="code-keyword">import</span> LinearRegression, Ridge, Lasso\n<span class="code-keyword">from</span> sklearn.model_selection <span class="code-keyword">import</span> train_test_split\n<span class="code-keyword">from</span> sklearn.metrics <span class="code-keyword">import</span> mean_squared_error, r2_score\n<span class="code-keyword">from</span> sklearn.datasets <span class="code-keyword">import</span> fetch_california_housing\n<span class="code-keyword">import</span> numpy <span class="code-keyword">as</span> np\n\n<span class="code-comment"># 加载加州房价数据</span>\nhousing = fetch_california_housing()\nX_train, X_test, y_train, y_test = train_test_split(\n    housing.data, housing.target, test_size=<span class="code-string">0.2</span>, random_state=<span class="code-string">42</span>\n)\n\n<span class="code-comment"># 训练Ridge回归(L2正则化)</span>\nmodel = Ridge(alpha=<span class="code-string">1.0</span>)\nmodel.fit(X_train, y_train)\n\n<span class="code-comment"># 评估</span>\ny_pred = model.predict(X_test)\n<span class="code-keyword">print</span>("MSE: {:.4f}".format(mean_squared_error(y_test, y_pred)))\n<span class="code-keyword">print</span>("R2分数: {:.4f}".format(r2_score(y_test, y_pred)))'
      },
      {
        heading: "💡 学习建议",
        content: "<p>线性回归包含大量数学推导，建议动手推导一遍最小二乘法和梯度下降的公式，理解为什么梯度反方向是函数下降最快的方向。重点理解偏差-方差权衡与正则化的关系。学完后思考：L1为什么能产生稀疏解？特征共线性对线性回归有什么影响？</p>"
      }
    ]
  },
  {
    title: "第76-95集：逻辑回归与分类问题 - Sigmoid与极大似然",
    sections: [
      {
        heading: "📖 内容概述",
        content: "<p>逻辑回归是分类问题的经典基线算法，名字虽带\"回归\"但实际解决分类问题。教程从Sigmoid函数讲起，系统讲解极大似然估计、损失函数推导、多分类策略、分类评估指标体系，并应用于乳腺癌诊断等医疗场景。</p>"
      },
      {
        heading: "🎯 核心知识点",
        list: [
          "Sigmoid/Logistic函数：将任意值映射到(0,1)",
          "极大似然估计推导对数损失函数(交叉熵)",
          "逻辑回归的梯度下降求解",
          "决策边界：线性/非线性决策边界",
          "多分类策略：One-vs-Rest(OvR)与One-vs-One(OvO)",
          "混淆矩阵：TP/FP/TN/FN",
          "精确率Precision、召回率Recall、F1-Score",
          "ROC曲线与AUC值的含义与计算",
          "准确率悖论与不平衡数据集处理",
          "乳腺癌威斯康星数据集分类实战"
        ]
      },
      {
        heading: "💻 代码示例",
        code: '<span class="code-keyword">from</span> sklearn.linear_model <span class="code-keyword">import</span> LogisticRegression\n<span class="code-keyword">from</span> sklearn.model_selection <span class="code-keyword">import</span> train_test_split\n<span class="code-keyword">from</span> sklearn.metrics <span class="code-keyword">import</span> classification_report, roc_auc_score\n<span class="code-keyword">from</span> sklearn.datasets <span class="code-keyword">import</span> load_breast_cancer\n<span class="code-keyword">from</span> sklearn.preprocessing <span class="code-keyword">import</span> StandardScaler\n\n<span class="code-comment"># 加载乳腺癌数据</span>\ndata = load_breast_cancer()\nX_train, X_test, y_train, y_test = train_test_split(\n    data.data, data.target, test_size=<span class="code-string">0.2</span>, random_state=<span class="code-string">42</span>\n)\n\nscaler = StandardScaler()\nX_train_scaled = scaler.fit_transform(X_train)\nX_test_scaled = scaler.transform(X_test)\n\n<span class="code-comment"># 训练逻辑回归</span>\nlr = LogisticRegression(max_iter=<span class="code-string">10000</span>)\nlr.fit(X_train_scaled, y_train)\n\ny_pred = lr.predict(X_test_scaled)\ny_prob = lr.predict_proba(X_test_scaled)[:, <span class="code-string">1</span>]\n<span class="code-keyword">print</span>(classification_report(y_test, y_pred))\n<span class="code-keyword">print</span>("AUC: {:.4f}".format(roc_auc_score(y_test, y_prob)))'
      },
      {
        heading: "💡 学习建议",
        content: "<p>分类问题的评估指标是这部分的重点也是难点，特别是精确率和召回率的权衡问题，一定要结合混淆矩阵深入理解。ROC-AUC是工业界非常常用的指标，理解其几何意义和物理意义。思考：为什么逻辑回归用交叉熵损失而不用MSE？</p>"
      }
    ]
  },
  {
    title: "第96-120集：决策树与随机森林 - ID3/C4.5/CART",
    sections: [
      {
        heading: "📖 内容概述",
        content: "<p>决策树是基于规则的直观模型，也是集成学习的基础。教程从信息论基础(熵、信息增益)讲起，详细讲解ID3、C4.5、CART三种经典决策树算法的构建与剪枝，再扩展到Bagging集成和随机森林，最后用泰坦尼克号生存预测实战串联所有知识点。</p>"
      },
      {
        heading: "🎯 核心知识点",
        list: [
          "信息熵：衡量数据纯度，熵越大越混乱",
          "信息增益：ID3算法划分准则，偏向多值特征",
          "信息增益率：C4.5改进，解决信息增益偏好问题",
          "基尼系数：CART树划分准则，计算更快",
          "决策树剪枝：预剪枝(限制深度/样本数)、后剪枝",
          "CART回归树：最小化平方误差划分",
          "集成学习思想：三个臭皮匠赛过诸葛亮",
          "Bagging：Bootstrap抽样+并行训练+投票/平均",
          "随机森林：随机样本+随机特征的双重随机性",
          "特征重要性评估与泰坦尼克号实战"
        ]
      },
      {
        heading: "💻 代码示例",
        code: '<span class="code-keyword">from</span> sklearn.ensemble <span class="code-keyword">import</span> RandomForestClassifier\n<span class="code-keyword">from</span> sklearn.model_selection <span class="code-keyword">import</span> GridSearchCV\n<span class="code-keyword">import</span> pandas <span class="code-keyword">as</span> pd\n\n<span class="code-comment"># 随机森林+网格搜索调参</span>\nrf = RandomForestClassifier(random_state=<span class="code-string">42</span>)\nparam_grid = {\n    <span class="code-string">\'n_estimators\'</span>: [<span class="code-string">100</span>, <span class="code-string">200</span>],\n    <span class="code-string">\'max_depth\'</span>: [<span class="code-string">5</span>, <span class="code-string">10</span>, <span class="code-keyword">None</span>],\n    <span class="code-string">\'min_samples_split\'</span>: [<span class="code-string">2</span>, <span class="code-string">5</span>]\n}\ngrid_search = GridSearchCV(rf, param_grid, cv=<span class="code-string">5</span>, scoring=<span class="code-string">\'accuracy\'</span>)\ngrid_search.fit(X_train, y_train)\n\n<span class="code-keyword">print</span>("最佳参数:", grid_search.best_params_)\n<span class="code-keyword">print</span>("最佳CV分数: {:.4f}".format(grid_search.best_score_))'
      },
      {
        heading: "💡 学习建议",
        content: "<p>建议手动实现一个简单的决策树(基于信息增益或基尼系数)，理解递归建树过程。随机森林是工业界最常用的算法之一，务必掌握sklearn中各种参数的含义和调参方法。特征重要性是很实用的功能，可以用于特征选择和模型解释。</p>"
      }
    ]
  },
  {
    title: "第121-145集：聚类算法 - K-Means与层次聚类",
    sections: [
      {
        heading: "📖 内容概述",
        content: "<p>聚类是无监督学习的代表，目标是发现数据内在的分组结构。教程详细讲解K-Means原理与收敛性证明、K值选择方法、层次聚类的AGNES算法、基于密度的DBSCAN算法，并应用于客户价值分群(RFM模型)、图像压缩等场景。</p>"
      },
      {
        heading: "🎯 核心知识点",
        list: [
          "无监督学习 vs 监督学习：没有标签y",
          "K-Means算法流程：初始化质心→分配样本→更新质心→收敛",
          "K-Means目标函数：最小化SSE(簇内平方和)",
          "K值选择：肘部法则、轮廓系数、CH指数",
          "K-Means优缺点与改进：K-Means++初始化",
          "层次聚类：AGNES自底向上聚合，DIANA自顶向下分裂",
          "距离计算：最小距离/最大距离/平均距离/ward法",
          "树状图(Dendrogram)的绘制与解读",
          "DBSCAN：基于密度聚类，能发现任意形状簇和噪声点",
          "轮廓系数：簇内紧密度与簇间分离度的综合衡量"
        ]
      },
      {
        heading: "💻 代码示例",
        code: '<span class="code-keyword">from</span> sklearn.cluster <span class="code-keyword">import</span> KMeans\n<span class="code-keyword">from</span> sklearn.preprocessing <span class="code-keyword">import</span> StandardScaler\n<span class="code-keyword">from</span> sklearn.metrics <span class="code-keyword">import</span> silhouette_score\n\n<span class="code-comment"># 数据标准化(聚类必须做!)</span>\nscaler = StandardScaler()\nX_scaled = scaler.fit_transform(X)\n\n<span class="code-comment"># 肘部法则选择K</span>\ninertias = []\n<span class="code-keyword">for</span> k <span class="code-keyword">in</span> range(<span class="code-string">2</span>, <span class="code-string">10</span>):\n    kmeans = KMeans(n_clusters=k, random_state=<span class="code-string">42</span>, n_init=<span class="code-string">10</span>)\n    kmeans.fit(X_scaled)\n    inertias.append(kmeans.inertia_)\n\n<span class="code-comment"># 训练最终模型</span>\nkmeans = KMeans(n_clusters=<span class="code-string">4</span>, random_state=<span class="code-string">42</span>, n_init=<span class="code-string">10</span>)\nlabels = kmeans.fit_predict(X_scaled)\n<span class="code-keyword">print</span>("轮廓系数: {:.4f}".format(silhouette_score(X_scaled, labels)))'
      },
      {
        heading: "💡 学习建议",
        content: "<p>聚类算法一定要做特征标准化！因为K-Means基于距离计算，量纲影响极大。K-Means的结果受初始质心影响，sklearn中通过n_init参数多次运行取最优。DBSCAN不需要指定簇数，但对eps和min_samples参数敏感。聚类结果的评估是难点，因为没有真实标签做对比。</p>"
      }
    ]
  },
  {
    title: "第146-165集：支持向量机SVM - 间隔最大化与核技巧",
    sections: [
      {
        heading: "📖 内容概述",
        content: "<p>SVM是统计学习理论的集大成者，在小样本、高维场景下表现出色。教程从最大间隔分类器讲起，引入软间隔处理线性不可分，通过拉格朗日对偶转化问题，再用核技巧处理非线性问题，最后应用于手写数字识别(MNIST)。数学推导较多，是整个课程的\"硬核\"部分。</p>"
      },
      {
        heading: "🎯 核心知识点",
        list: [
          "函数间隔与几何间隔",
          "最大间隔超平面：支持向量决定决策边界",
          "硬间隔SVM原问题与对偶问题",
          "软间隔与松弛变量：惩罚参数C",
          "核技巧(Kernel Trick)：隐式映射到高维空间",
          "常用核函数：线性核、多项式核、RBF高斯核、Sigmoid核",
          "核函数映射原理与gamma参数的影响",
          "SMO(序列最小优化)算法思想",
          "SVM用于回归(SVR)",
          "SVM优缺点：小样本表现好，大数据集训练慢"
        ]
      },
      {
        heading: "💻 代码示例",
        code: '<span class="code-keyword">from</span> sklearn.svm <span class="code-keyword">import</span> SVC\n<span class="code-keyword">from</span> sklearn.model_selection <span class="code-keyword">import</span> GridSearchCV\n<span class="code-keyword">from</span> sklearn.preprocessing <span class="code-keyword">import</span> StandardScaler\n<span class="code-keyword">from</span> sklearn.pipeline <span class="code-keyword">import</span> Pipeline\n\n<span class="code-comment"># SVM必须做特征缩放!</span>\npipe = Pipeline([\n    (<span class="code-string">\'scaler\'</span>, StandardScaler()),\n    (<span class="code-string">\'svm\'</span>, SVC())\n])\n\n<span class="code-comment"># 网格搜索调C和gamma</span>\nparam_grid = {\n    <span class="code-string">\'svm__C\'</span>: [<span class="code-string">0.1</span>, <span class="code-string">1</span>, <span class="code-string">10</span>],\n    <span class="code-string">\'svm__gamma\'</span>: [<span class="code-string">\'scale\'</span>, <span class="code-string">\'auto\'</span>],\n    <span class="code-string">\'svm__kernel\'</span>: [<span class="code-string">\'rbf\'</span>]\n}\ngrid = GridSearchCV(pipe, param_grid, cv=<span class="code-string">5</span>)\ngrid.fit(X_train, y_train)\n<span class="code-keyword">print</span>("测试集准确率: {:.4f}".format(grid.score(X_test, y_test)))'
      },
      {
        heading: "💡 学习建议",
        content: "<p>SVM数学推导较多，重点理解间隔最大化思想、对偶问题的转化动机、核技巧的本质这三个核心。实践中记住SVM\"三板斧\"：特征缩放、RBF核、网格搜索调C和gamma。SVM在文本分类、生物信息学等高维稀疏数据上表现优秀，但在大规模数据集上训练较慢。</p>"
      }
    ]
  },
  {
    title: "第166-180集：朴素贝叶斯 - 贝叶斯定理与文本分类",
    sections: [
      {
        heading: "📖 内容概述",
        content: "<p>朴素贝叶斯是基于概率的简单高效分类器，在文本分类领域曾长期占据统治地位。教程从贝叶斯定理讲起，解释\"朴素\"的特征条件独立假设含义，详细讲解高斯贝叶斯、多项式贝叶斯、伯努利贝叶斯三种变种，实战项目包括垃圾邮件分类和新闻文本分类。</p>"
      },
      {
        heading: "🎯 核心知识点",
        list: [
          "贝叶斯定理：先验概率→似然→后验概率",
          "特征条件独立假设：简化计算的\"朴素\"之处",
          "朴素贝叶斯分类器：后验概率最大化",
          "高斯朴素贝叶斯：假设特征服从高斯分布(连续值)",
          "多项式朴素贝叶斯：特征为离散计数(词频)",
          "伯努利朴素贝叶斯：特征为二元布尔值",
          "拉普拉斯平滑(Laplace Smoothing)：避免零概率",
          "文本表示：词袋模型BoW、TF-IDF",
          "朴素贝叶斯优缺点：速度极快，假设过强",
          "垃圾邮件分类、新闻文本分类实战"
        ]
      },
      {
        heading: "💻 代码示例",
        code: '<span class="code-keyword">from</span> sklearn.feature_extraction.text <span class="code-keyword">import</span> TfidfVectorizer\n<span class="code-keyword">from</span> sklearn.naive_bayes <span class="code-keyword">import</span> MultinomialNB\n<span class="code-keyword">from</span> sklearn.pipeline <span class="code-keyword">import</span> Pipeline\n\n<span class="code-comment"># TF-IDF + 朴素贝叶斯 文本分类流水线</span>\ntext_clf = Pipeline([\n    (<span class="code-string">\'tfidf\'</span>, TfidfVectorizer(stop_words=<span class="code-string">\'english\'</span>)),\n    (<span class="code-string">\'clf\'</span>, MultinomialNB(alpha=<span class="code-string">0.1</span>))\n])\n\ntext_clf.fit(train.data, train.target)\npreds = text_clf.predict(test.data)\n<span class="code-keyword">print</span>("文本分类准确率: {:.4f}".format(accuracy_score(test.target, preds)))'
      },
      {
        heading: "💡 学习建议",
        content: "<p>朴素贝叶斯是文本分类的经典基线方法，实现简单、训练预测速度极快。重点理解贝叶斯定理和条件独立假设，思考为什么这个\"不切实际\"的假设在实际中(尤其文本)效果却不错。拉普拉斯平滑是必要细节，注意alpha参数的影响。</p>"
      }
    ]
  },
  {
    title: "第181-190集：降维与特征选择 - PCA主成分分析",
    sections: [
      {
        heading: "📖 内容概述",
        content: "<p>高维数据带来\"维度灾难\"，降维是重要的预处理手段。教程从维度灾难的直观解释讲起，详细讲解PCA主成分分析的数学原理(方差最大化、特征分解)、主成分个数选择、PCA可视化应用，还介绍了特征选择的三类方法：过滤法、包裹法、嵌入法。实战项目为人脸识别特征脸(Eigenfaces)。</p>"
      },
      {
        heading: "🎯 核心知识点",
        list: [
          "维度灾难：高维空间数据稀疏，距离失效",
          "PCA思想：找到投影后方差最大的方向",
          "数据中心化→协方差矩阵→特征值分解",
          "特征值与方差解释率的关系",
          "主成分个数选择：累计方差解释率(如95%)",
          "PCA的几何意义：坐标轴旋转",
          "PCA用于数据可视化：高维→2D/3D",
          "特征选择过滤法：方差选择、相关系数、卡方检验、互信息",
          "包裹法：RFE递归特征消除",
          "嵌入法：L1正则化、树模型特征重要性"
        ]
      },
      {
        heading: "💻 代码示例",
        code: '<span class="code-keyword">from</span> sklearn.decomposition <span class="code-keyword">import</span> PCA\n<span class="code-keyword">from</span> sklearn.datasets <span class="code-keyword">import</span> fetch_lfw_people\n<span class="code-keyword">import</span> numpy <span class="code-keyword">as</span> np\n\n<span class="code-comment"># 加载LFW人脸数据集</span>\nlfw_people = fetch_lfw_people(min_faces_per_person=<span class="code-string">70</span>, resize=<span class="code-string">0.4</span>)\nX = lfw_people.data\n\n<span class="code-comment"># PCA降维保留95%方差</span>\npca = PCA(n_components=<span class="code-string">0.95</span>, whiten=<span class="code-keyword">True</span>, random_state=<span class="code-string">42</span>)\nX_pca = pca.fit_transform(X)\n\n<span class="code-keyword">print</span>("原始维度:", X.shape[1])\n<span class="code-keyword">print</span>("降维后:", X_pca.shape[1])\n<span class="code-keyword">print</span>("累计解释方差比: {:.4f}".format(sum(pca.explained_variance_ratio_)))'
      },
      {
        heading: "💡 学习建议",
        content: "<p>PCA是最基础也最重要的降维方法，务必理解其数学原理和几何意义。注意PCA需要先做数据中心化，whiten白化在后续接SVM等分类器时效果更好。t-SNE是另一种常用的可视化降维方法(非线性)，可以对比学习。特征选择比降维更具可解释性，在实际项目中往往更实用。</p>"
      }
    ]
  },
  {
    title: "第191-200集：模型调优与项目实战 - 从数据到部署",
    sections: [
      {
        heading: "📖 内容概述",
        content: "<p>最后10集是课程的综合实战部分，将前面所学的算法知识串联起来，讲解工业界机器学习完整工作流：问题定义→数据获取→探索性分析→特征工程→模型选择→调优→评估→部署。重点讲解交叉验证、超参数优化、模型融合等进阶技巧，并完成一个端到端的预测项目。</p>"
      },
      {
        heading: "🎯 核心知识点",
        list: [
          "机器学习项目完整流程(CRISP-DM)",
          "交叉验证：K折CV、分层K折、时间序列CV",
          "超参数优化：网格搜索GridSearchCV、随机搜索",
          "贝叶斯优化：比网格搜索更高效的调参方法",
          "偏差-方差权衡：过拟合vs欠拟合诊断",
          "学习曲线与验证曲线：判断模型状态",
          "集成学习之Stacking堆叠融合",
          "Pipeline：将预处理+模型封装避免数据泄露",
          "模型持久化：joblib保存与加载模型",
          "项目文档撰写与结果汇报要点"
        ]
      },
      {
        heading: "💻 代码示例",
        code: '<span class="code-keyword">from</span> sklearn.pipeline <span class="code-keyword">import</span> Pipeline\n<span class="code-keyword">from</span> sklearn.compose <span class="code-keyword">import</span> ColumnTransformer\n<span class="code-keyword">from</span> sklearn.impute <span class="code-keyword">import</span> SimpleImputer\n<span class="code-keyword">from</span> sklearn.preprocessing <span class="code-keyword">import</span> OneHotEncoder, StandardScaler\n<span class="code-keyword">from</span> sklearn.ensemble <span class="code-keyword">import</span> RandomForestClassifier\n<span class="code-keyword">from</span> sklearn.model_selection <span class="code-keyword">import</span> cross_val_score, StratifiedKFold\n<span class="code-keyword">import</span> joblib\n\n<span class="code-comment"># 数值特征处理：中位数填充+标准化</span>\nnumeric_transformer = Pipeline(steps=[\n    (<span class="code-string">\'imputer\'</span>, SimpleImputer(strategy=<span class="code-string">\'median\'</span>)),\n    (<span class="code-string">\'scaler\'</span>, StandardScaler())\n])\n\n<span class="code-comment"># 类别特征处理：众数填充+OneHot编码</span>\ncategorical_transformer = Pipeline(steps=[\n    (<span class="code-string">\'imputer\'</span>, SimpleImputer(strategy=<span class="code-string">\'most_frequent\'</span>)),\n    (<span class="code-string">\'onehot\'</span>, OneHotEncoder(handle_unknown=<span class="code-string">\'ignore\'</span>))\n])\n\n<span class="code-comment"># 完整Pipeline</span>\npreprocessor = ColumnTransformer(transformers=[\n    (<span class="code-string">\'num\'</span>, numeric_transformer, numeric_features),\n    (<span class="code-string">\'cat\'</span>, categorical_transformer, categorical_features)\n])\n\nclf = Pipeline(steps=[\n    (<span class="code-string">\'preprocessor\'</span>, preprocessor),\n    (<span class="code-string">\'classifier\'</span>, RandomForestClassifier(random_state=<span class="code-string">42</span>))\n])\n\n<span class="code-comment"># 5折分层交叉验证(避免数据泄露!)</span>\ncv = StratifiedKFold(n_splits=<span class="code-string">5</span>, shuffle=<span class="code-keyword">True</span>, random_state=<span class="code-string">42</span>)\nscores = cross_val_score(clf, X, y, cv=cv, scoring=<span class="code-string">\'accuracy\'</span>)\n<span class="code-keyword">print</span>("CV准确率: {:.4f} +/- {:.4f}".format(scores.mean(), scores.std()))'
      },
      {
        heading: "💡 学习建议",
        content: "<p>这部分是从\"调包侠\"到\"工程师\"的关键跨越。一定要理解数据泄露(data leakage)问题——为什么预处理要放在Pipeline里用交叉验证？为什么不能先对整个数据集做标准化再划分？独立完成1-2个Kaggle入门赛(如Titanic、House Prices)是最好的实战检验。学完后你应该能独立完成一个完整的机器学习项目。</p>"
      }
    ]
  }
];
