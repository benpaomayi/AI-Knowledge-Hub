#!/usr/bin/env python3
"""
批量转换PPT中的数学公式为LaTeX格式（KaTeX渲染）
"""
import re
import os

def convert_formula_to_latex(text):
    """将HTML格式的公式文本转换为LaTeX格式"""
    result = text
    
    # 处理上标和下标（先处理嵌套情况）
    # <sup>...</sup> -> ^{...}
    result = re.sub(r'<sup>(.*?)</sup>', r'^{\1}', result)
    # <sub>...</sub> -> _{\1}
    result = re.sub(r'<sub>(.*?)</sub>', r'_{\1}', result)
    
    # 处理特殊符号
    result = result.replace('·', r' \cdot ')
    result = result.replace('×', r' \times ')
    result = result.replace('÷', r' \div ')
    result = result.replace('≥', r' \geq ')
    result = result.replace('≤', r' \leq ')
    result = result.replace('≠', r' \neq ')
    result = result.replace('≈', r' \approx ')
    result = result.replace('∞', r' \infty ')
    result = result.replace('α', r' \alpha ')
    result = result.replace('β', r' \beta ')
    result = result.replace('γ', r' \gamma ')
    result = result.replace('δ', r' \delta ')
    result = result.replace('Σ', r' \sum ')
    result = result.replace('∂', r' \partial ')
    result = result.replace('∇', r' \nabla ')
    result = result.replace('ε', r' \epsilon ')
    result = result.replace('θ', r' \theta ')
    result = result.replace('λ', r' \lambda ')
    result = result.replace('μ', r' \mu ')
    result = result.replace('σ', r' \sigma ')
    result = result.replace('π', r' \pi ')
    result = result.replace('√', r' \sqrt{')  # 需要手动补全
    
    # 处理Unicode下标数字
    subscript_map = {'₀':'_0','₁':'_1','₂':'_2','₃':'_3','₄':'_4',
                     '₅':'_5','₆':'_6','₇':'_7','₈':'_8','₉':'_9',
                     'ₙ':'_n', 'ₘ':'_m', 'ᵢ':'_i', 'ⱼ':'_j'}
    for k, v in subscript_map.items():
        result = result.replace(k, v)
    
    # 处理ŷ
    result = result.replace('ŷ', r'\hat{y}')
    
    # 移除<strong>等标签（保留内容）
    result = re.sub(r'<strong[^>]*>', '', result)
    result = re.sub(r'</strong>', '', result)
    result = re.sub(r'<br\s*/?>', r' \\ ', result)
    
    # 清理多余空格
    result = re.sub(r'\s+', ' ', result).strip()
    
    return result

def process_file(filepath):
    """处理单个PPT文件，转换formula块中的公式"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 查找所有formula块
    pattern = r'(<div class="formula"[^>]*>)(.*?)(</div>)'
    matches = list(re.finditer(pattern, content, re.DOTALL))
    
    if not matches:
        print(f"  未找到formula块")
        return 0
    
    converted = 0
    # 从后往前替换，避免索引偏移
    for match in reversed(matches):
        formula_content = match.group(2)
        
        # 提取描述部分（<span class="desc">...</span>）
        desc_match = re.search(r'(<span class="desc">.*?</span>)', formula_content, re.DOTALL)
        desc_html = desc_match.group(1) if desc_match else ''
        
        # 提取公式主体（去掉desc）
        formula_main = re.sub(r'<span class="desc">.*?</span>', '', formula_content, flags=re.DOTALL).strip()
        
        # 跳过SVG图形
        if '<svg' in formula_main:
            continue
        
        # 跳过纯文本解释型的formula（没有明显数学符号的）
        math_indicators = ['=', 'Σ', '∂', '∇', 'h(x)', 'J(', 'w₁', 'x₁', 
                          'w(x', 'f(x', 'log', 'exp', '⁻', '<sub>', '<sup>',
                          '·', '×', 'α', 'β', 'θ', 'λ']
        has_math = any(ind in formula_main for ind in math_indicators)
        if not has_math:
            continue
        
        # 转换公式为LaTeX
        latex_formula = convert_formula_to_latex(formula_main)
        
        # 用$$包裹
        new_formula_inner = f'$$\\displaystyle {latex_formula}$$\n      {desc_html}'
        
        # 替换
        old_full = match.group(0)
        new_full = match.group(1) + '\n      ' + new_formula_inner.strip() + '\n    ' + match.group(3)
        
        content = content[:match.start()] + new_full + content[match.end():]
        converted += 1
    
    if converted > 0:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
    
    return converted

def main():
    base_dir = '/Users/xizou/software_app/APP/TraeWorkApps/ml-learning-site'
    
    # 优先处理的核心数学PPT
    priority_files = [
        'ppt-04.html',  # 线性回归
        'ppt-05.html',  # 梯度下降
        'ppt-06.html',  # 线性回归-最小二乘法
        'ppt-07.html',  # 逻辑回归
        'ppt-08.html',  # 逻辑回归-损失函数
        'ppt-09.html',  # 决策树
        'ppt-10.html',  # 决策树-信息熵
        'ppt-13.html',  # 支持向量机
        'ppt-14.html',  # SVM核函数
        'ppt-18.html',  # PCA降维
        'ppt-21.html',  # K-Means聚类
        'ppt-22.html',  # 聚类评估
        'ppt-23.html',  # 朴素贝叶斯
        'ppt-24.html',  # 模型评估
        'ppt-26.html',  # 集成学习
        'ppt-27.html',  # 随机森林
        'ppt-28.html',  # XGBoost
    ]
    
    total_converted = 0
    for filename in priority_files:
        filepath = os.path.join(base_dir, filename)
        if os.path.exists(filepath):
            print(f"处理 {filename}...")
            count = process_file(filepath)
            print(f"  转换了 {count} 个公式")
            total_converted += count
    
    print(f"\n总计转换了 {total_converted} 个公式")

if __name__ == '__main__':
    main()
