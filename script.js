// 问题数据
const questions = [
    "我情不自禁地反复回想我们在一起的美好时光。",
    "我觉得没有他/她，我的生活失去了意义。",
    "我认为分手全是我的错。",
    "我觉得他/她再也不值得我信任了。",
    "我认为分手主要是因为他/她的自私和不负责任。",
    "我有想立刻给他/她打电话或发信息的冲动。",
    "我避免参加可能会遇到他/她或共同朋友的社交活动。",
    "我因为心情不好而睡眠困难（难以入睡、早醒或睡不深）。",
    "我能客观地分析我们关系中双方存在的问题。",
    "我听到某首歌或看到某个地方都会想起他/她。",
    "我感到非常孤独，渴望他/她的陪伴。",
    "我觉得自己在关系中是个失败者。",
    "我怀疑他/她早在分手前就对我隐瞒了很多事。",
    "我反复思考他/她做过的那些伤害我的事。",
    "我对他/她感到愤怒，想和他/她激烈争吵。",
    "我对和其他人交往或约会失去了兴趣。",
    "我保留着他/她的物品，舍不得处理掉。",
    "我的食欲显著下降或增加。",
    "我能够接受分手这个事实，尽管它令人痛苦。",
    "我害怕一个人面对未来的生活。",
    "我为自己在关系中的某些行为感到羞愧。",
    "我觉得他/她可能会欺骗或利用我。",
    "我认为他/她从未真正欣赏或理解过我。",
    "我有想过用极端方式引起他/她注意的念头。",
    "我时常翻看我们的旧照片或聊天记录。",
    "我相信自己能从中成长并变得更好。",
    "我感到精力下降，容易疲劳。",
    "我觉得别人会用异样的眼光看我，因为我是单身/分手了。",
    "我需要他/她的认可来确认自己的价值。",
    "我反复思考自己的缺点和不足。",
    "我很难再相信他/她做出的任何承诺。",
    "一想到他/她，我的心跳就会加速或感到胸闷。",
    "我有时想通过伤害他/她来平息我的痛苦。",
    "我认为他/她的朋友和家人也对我有看法。",
    "我开始规划没有他/她参与的未来生活。",
    "我出现头痛、胃痛等身体不适，且查无实据。",
    "我拒绝认识新朋友。",
    "我觉得只有他/她才能让我完整。",
    "我理想化我们的过去，忽略其中的问题。",
    "我觉得他/她如果真心改过，也许还能信任。",
    "我无法控制地对他/她现在的生活感到好奇和嫉妒。",
    "我觉得自己不值得被爱。",
    "我认为他/她离开我是因为我不够好。",
    "我专注于提升自己，而不是沉溺于过去。",
    "我感到一阵阵的心慌或恐慌。",
    "我害怕独自一人。",
    "我渴望他/她回来照顾我。",
    "我梦到与他/她和好。",
    "我根本不相信他/她说的任何话。",
    "我有想在他/她面前摔东西或大喊大叫的冲动。",
    "我对自己感到失望。",
    "我认为他/她应该为我的痛苦负责。",
    "我能看到这件事带来的积极一面。",
    "我觉得在社交场合很不自在。",
    "我能列出我们关系中的主要问题。",
    "我感到情感上非常依赖他/她。",
    "我很难集中注意力工作或学习。",
    "我觉得他/她的人品有问题。",
    "我想强迫他/她给我一个答案或交代。",
    "我贬低自己，觉得自己一无是处。",
    "我怨恨他/她毁了我们原本可以很好的关系。",
    "我明白感情是两个人的事，不能单方面责怪谁。",
    "我避开我们曾经常去的地方。",
    "我感到莫名的悲伤，想哭。",
    "没有他/她的消息，我会感到焦虑不安。",
    "我反复自责，觉得如果当初...就好了。",
    "我觉得他/她对我充满了恶意。",
    "我有想过散布他/她坏话的念头。",
    "我常常陷入回忆中无法自拔。",
    "我认为他/她从不考虑我的感受。",
    "我对开始新的恋情持开放态度。",
    "我觉得自己毫无魅力。",
    "我感到肌肉紧张或浑身不舒服。",
    "我无法想象没有他/她的生活。",
    "我对他/她可能的新伴侣充满敌意。",
    "我分析导致分手的深层原因，以避免重蹈覆辙。",
    "我认为他/她极其虚伪。",
    "我因为焦虑而咬指甲、搓手或踱步。",
    "我认为他/她毁了我对爱情的所有幻想。",
    "我愿意参加活动来扩大社交圈。",
    "我觉得自己无法独立做出决定。",
    "我想用伤害自己的方式来让他/她后悔。",
    "我在社交媒体上密切关注他/她的动态。",
    "我因为压力大而暴饮暴食或酗酒。",
    "我想和他/她当面吵一架。",
    "我需要他/她来帮我处理生活中的困难。",
    "我相信时间会帮助我愈合，无论结局如何。",
    "我不断回想我们最后一次见面的情景。",
    "我觉得自己永远无法从这段感情中恢复过来。",
    "我觉得他/她本质上是不诚实的人。"
];

// 因子分类（基于0索引，原始题号减1）
const factors = {
    情感沉浸性: [0, 9, 16, 24, 31, 38, 47, 54, 61, 68, 75, 82, 87], // 1, 10, 17, 25, 32, 39, 48, 55, 62, 69, 76, 83, 88
    关系依赖性: [1, 10, 19, 28, 37, 46, 55, 64, 73, 80, 85], // 2, 11, 20, 29, 38, 47, 56, 65, 74, 81, 86
    自我否定性: [2, 11, 20, 29, 41, 50, 59, 65, 71, 77, 83, 88], // 3, 12, 21, 30, 42, 51, 60, 66, 72, 78, 84, 89
    信任受损度: [3, 12, 21, 30, 39, 48, 57, 66, 76, 89], // 4, 13, 22, 31, 40, 49, 58, 67, 77, 90
    消极归因: [4, 13, 22, 33, 42, 51, 60, 69, 78, 86], // 5, 14, 23, 34, 43, 52, 61, 70, 79, 87
    冲动与敌对: [5, 14, 23, 32, 40, 49, 58, 67, 74, 81, 84], // 6, 15, 24, 33, 41, 50, 59, 68, 75, 82, 85
    社交回避: [6, 15, 27, 36, 45, 53, 62, 70, 79, 82], // 7, 16, 28, 37, 46, 54, 63, 71, 80, 83
    身心困扰: [7, 17, 26, 35, 44, 52, 56, 63, 72, 77, 83], // 8, 18, 27, 36, 45, 53, 57, 64, 73, 78, 84
    理性认知: [8, 18, 25, 34, 43, 54, 61, 68, 75, 80], // 9, 19, 26, 35, 44, 55, 62, 69, 76, 81
    未来乐观性: [18, 25, 34, 43, 52, 61, 70, 79, 86] // 19, 26, 35, 44, 53, 62, 71, 80, 87
};

// 反向计分题目（基于0索引）- 理性认知和未来乐观性因子中的部分题目
const reverseItems = [8, 18, 25, 34, 43, 52, 54, 61, 68, 70, 75, 79, 80, 86];

// 用户答案数组
let userAnswers = new Array(90).fill(0);
let currentQuestion = 0;

// DOM 元素
const homePage = document.getElementById('homepage');
const testPage = document.getElementById('testpage');
const resultPage = document.getElementById('resultpage');
const startBtn = document.getElementById('startBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const questionText = document.getElementById('questionText');
const currentQuestionSpan = document.getElementById('currentQuestion');
const questionNumSpan = document.getElementById('questionNum');
const progressFill = document.getElementById('progressFill');
const restartBtn = document.getElementById('restartBtn');
const timeLimit = document.getElementById('timeLimit');

// 24小时访问限制功能（暂时注释）
function checkTimeLimit() {
    // const lastVisit = localStorage.getItem('lastVisit');
    // const now = new Date().getTime();

    // if (lastVisit) {
    //     const timeDiff = now - parseInt(lastVisit);
    //     const hoursDiff = timeDiff / (1000 * 60 * 60);

    //     if (hoursDiff < 24) {
    //         return false; // 24小时内不允许访问
    //     }
    // }

    // localStorage.setItem('lastVisit', now.toString());
    return true; // 暂时始终允许访问
}

// 页面切换功能
function showPage(pageId) {
    // 先滚动到顶部
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // 隐藏所有页面
    homePage.classList.remove('active');
    resultPage.classList.remove('active');
    
    // 如果切换到首页
    if (pageId === 'homepage') {
        // 重置页面状态
        document.body.style.overflow = 'auto';
        resultPage.style.display = 'none';
        
        // 重置首页显示
        homePage.style.display = 'flex';
        homePage.classList.add('active');
        
        // 重置首页内容
        const header = document.querySelector('.header');
        const description = document.querySelector('.description');
        const startSection = document.querySelector('.start-section');
        const questionSection = document.getElementById('questionSection');

        if (header) header.style.display = 'block';
        if (description) description.style.display = 'block';
        if (startSection) startSection.style.display = 'block';
        if (questionSection) questionSection.style.display = 'none';
        
        // 重置滚动位置
        window.scrollTo({ top: 0, behavior: 'instant' });
    }
    // 如果切换到结果页面
    else if (pageId === 'resultpage') {
        // 隐藏首页所有内容
        homePage.style.display = 'none';
        document.querySelector('.header').style.display = 'none';
        document.querySelector('.description').style.display = 'none';
        document.querySelector('.start-section').style.display = 'none';
        document.getElementById('questionSection').style.display = 'none';
        // 显示结果页面
        resultPage.classList.add('active');
        document.body.style.overflow = 'auto';
    }
}

// 更新问题显示
function updateQuestion() {
    questionText.textContent = questions[currentQuestion];
    currentQuestionSpan.textContent = (currentQuestion + 1).toString();
    questionNumSpan.textContent = (currentQuestion + 1).toString();
    progressFill.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
    
    // 更新按钮状态
    prevBtn.disabled = currentQuestion === 0;
    nextBtn.style.display = currentQuestion === questions.length - 1 ? 'none' : 'block';
    submitBtn.style.display = currentQuestion === questions.length - 1 ? 'block' : 'none';
    
    // 清除所有选项的选中状态
    const options = document.getElementsByName('answer');
    options.forEach(option => {
        option.checked = false;
    });

    // 恢复之前的选择（如果有）
    if (userAnswers[currentQuestion] !== 0) {
        const selectedOption = document.querySelector(`input[name="answer"][value="${userAnswers[currentQuestion]}"]`);
        if (selectedOption) {
            selectedOption.checked = true;
        }
    }

    // 滚动到页面顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 计算因子分数
function calculateFactorScores() {
    const scores = {};
    let totalScore = 0;
    let totalItems = 0;

    // 创建处理反向计分的答案数组
    const processedAnswers = userAnswers.map((answer, index) => {
        if (reverseItems.includes(index)) {
            // 反向计分：1->5, 2->4, 3->3, 4->2, 5->1
            return 6 - answer;
        }
        return answer;
    });

    // 计算阳性和阴性项目数
    const positiveItems = processedAnswers.filter(score => score > 1).length;
    const negativeItems = processedAnswers.filter(score => score <= 1).length;

    // 计算各因子分数
    for (const [factor, items] of Object.entries(factors)) {
        const sum = items.reduce((acc, index) => acc + processedAnswers[index], 0);
        const average = sum / items.length;
        scores[factor] = {
            sum,
            average,
            count: items.length,
            positiveCount: items.filter(index => processedAnswers[index] > 1).length
        };
        totalScore += sum;
        totalItems += items.length;
    }

    // 计算总分和平均分
    const overallAverage = totalScore / questions.length;

    return {
        factorScores: scores,
        totalScore,
        overallAverage,
        positiveItems,
        negativeItems,
        positiveSymptomsScore: totalScore / positiveItems || 0 // 阳性症状均分
    };
}

// 生成评估建议
function generateRecommendations(scores) {
    let recommendations = [];
    const { overallAverage, factorScores } = scores;

    // 总体评估建议（基于总症状指数GSI）
    if (overallAverage <= 1.5) {
        recommendations.push("您的情绪较为平稳，受分手影响较小，具备了理性决策的心理基础。");
    } else if (overallAverage <= 2.5) {
        recommendations.push("您感受到中等程度的困扰，处于常见的悲伤和矛盾期，决策可能受到情绪波动的影响。建议：");
        recommendations.push("• 给自己一些时间来处理情绪");
        recommendations.push("• 保持规律的作息和健康的生活方式");
        recommendations.push("• 与信任的朋友或家人交流感受");
    } else if (overallAverage <= 3.5) {
        recommendations.push("您的情绪困扰较为严重，可能被强烈的思念、愤怒或抑郁等情绪所主导，此时做出重大决策的风险较高。强烈建议：");
        recommendations.push("• 暂缓做出复合决定，先关注自我调适");
        recommendations.push("• 寻求专业的心理咨询帮助");
        recommendations.push("• 与家人朋友多交流，获取社会支持");
    } else {
        recommendations.push("您处于极度痛苦中，身心受到严重影响，当前的首要任务是自我关怀和心理调适，而非考虑复合。请务必：");
        recommendations.push("• 立即寻求专业的心理医生或精神科医生的帮助");
        recommendations.push("• 告知家人或信任的朋友，获取必要的支持和帮助");
        recommendations.push("• 保持规律的生活作息，避免过度劳累");
    }

    // 针对各因子的具体建议
    recommendations.push("\n各维度具体建议：");

    // 检查是否有任何因子需要关注
    let hasSpecificRecommendations = false;

    if (factorScores.情感沉浸性.average > 2) {
        recommendations.push("\n情感沉浸性方面：");
        recommendations.push("• 适当限制回忆过往的时间，设定'怀念时间'");
        recommendations.push("• 处理或收起前任的物品，减少触发回忆的物件");
        recommendations.push("• 培养新的兴趣爱好，转移注意力");
        hasSpecificRecommendations = true;
    }

    if (factorScores.关系依赖性.average > 2) {
        recommendations.push("\n关系依赖性方面：");
        recommendations.push("• 培养独立生活的能力和信心");
        recommendations.push("• 建立自我价值感，不依赖他人认可");
        recommendations.push("• 学习享受独处的时光");
        hasSpecificRecommendations = true;
    }

    if (factorScores.自我否定性.average > 2) {
        recommendations.push("\n自我否定性方面：");
        recommendations.push("• 练习自我接纳和自我关爱");
        recommendations.push("• 挑战负面的自我对话");
        recommendations.push("• 记录自己的优点和成就");
        hasSpecificRecommendations = true;
    }

    if (factorScores.信任受损度.average > 2) {
        recommendations.push("\n信任受损度方面：");
        recommendations.push("• 给自己时间来处理被背叛的感受");
        recommendations.push("• 避免过度猜疑和监控行为");
        recommendations.push("• 如考虑复合，需要开诚布公的沟通");
        hasSpecificRecommendations = true;
    }

    if (factorScores.消极归因.average > 2) {
        recommendations.push("\n消极归因方面：");
        recommendations.push("• 尝试从多角度看待分手原因");
        recommendations.push("• 学习承担自己在关系中的责任");
        recommendations.push("• 减少对前任的怨恨情绪");
        hasSpecificRecommendations = true;
    }

    if (factorScores.冲动与敌对.average > 2) {
        recommendations.push("\n冲动与敌对方面：");
        recommendations.push("• 学习情绪管理和冲动控制技巧");
        recommendations.push("• 在冲动时暂停并深呼吸");
        recommendations.push("• 寻找健康的情绪发泄方式");
        hasSpecificRecommendations = true;
    }

    if (factorScores.社交回避.average > 2) {
        recommendations.push("\n社交回避方面：");
        recommendations.push("• 逐步恢复社交活动");
        recommendations.push("• 寻求朋友的理解和支持");
        recommendations.push("• 参加新的社交圈子");
        hasSpecificRecommendations = true;
    }

    if (factorScores.身心困扰.average > 2) {
        recommendations.push("\n身心困扰方面：");
        recommendations.push("• 保持规律的作息和饮食");
        recommendations.push("• 适量运动，释放压力");
        recommendations.push("• 学习放松技巧，如冥想、瑜伽等");
        hasSpecificRecommendations = true;
    }

    // 复合可能性评估
    recommendations.push("\n复合可能性评估：");

    // 计算高风险因子得分
    const highRiskFactors = ['信任受损度', '消极归因', '冲动与敌对', '自我否定性'];
    const highRiskAvg = highRiskFactors.reduce((sum, factor) => sum + (factorScores[factor]?.average || 0), 0) / highRiskFactors.length;

    // 计算情感动力因子得分
    const emotionalFactors = ['情感沉浸性', '关系依赖性'];
    const emotionalAvg = emotionalFactors.reduce((sum, factor) => sum + (factorScores[factor]?.average || 0), 0) / emotionalFactors.length;

    // 计算资源与健康因子得分
    const healthFactors = ['理性认知', '未来乐观性'];
    const healthAvg = healthFactors.reduce((sum, factor) => sum + (factorScores[factor]?.average || 0), 0) / healthFactors.length;

    if (highRiskAvg > 3) {
        recommendations.push("• 高风险因子得分较高，存在根本性的未解决问题，复合风险极高");
    } else if (emotionalAvg > 3 && healthAvg < 2.5) {
        recommendations.push("• 有强烈的复合冲动，但缺乏解决问题的能力，建议先提升自我调适能力");
    } else if (emotionalAvg > 2.5 && healthAvg > 3 && highRiskAvg < 2.5) {
        recommendations.push("• 具备较好的复合基础，但仍需谨慎评估和充分沟通");
    } else if (healthAvg > 3 && emotionalAvg < 2.5) {
        recommendations.push("• 您已很好地从关系中恢复，更适合开始新的生活");
    } else {
        recommendations.push("• 建议继续自我成长，暂缓做出复合决定");
    }

    // 如果没有特定的维度建议，提供通用的健康维护建议
    if (!hasSpecificRecommendations) {
        recommendations.push("\n恭喜您！各维度得分都在正常范围内。为了继续保持良好的心理状态，建议：");
        recommendations.push("• 保持规律的作息时间，确保充足的睡眠");
        recommendations.push("• 坚持适度的体育锻炼，增强身心健康");
        recommendations.push("• 培养积极的兴趣爱好，丰富精神生活");
        recommendations.push("• 维护良好的人际关系，多与亲友交流");
        recommendations.push("• 学会合理安排工作和休息，避免过度压力");
        recommendations.push("• 定期进行自我反思，关注内心感受");
        recommendations.push("• 遇到困难时，及时寻求帮助和支持");
    }

    return recommendations;
}

// 显示测试结果
function showResults() {
    const scores = calculateFactorScores();

    // 更新总分显示
    const totalScoreDisplay = document.getElementById('totalScoreDisplay');
    const averageScoreDisplay = document.getElementById('averageScoreDisplay');
    totalScoreDisplay.textContent = Math.round(scores.totalScore);
    averageScoreDisplay.textContent = scores.overallAverage.toFixed(2);

    // 更新因子得分表格
    const factorTableBody = document.getElementById('factorTableBody');
    factorTableBody.innerHTML = '';

    for (const [factor, data] of Object.entries(scores.factorScores)) {
        const statusClass = getStatusClass(data.average);
        const statusText = getStatusText(data.average);

        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="factor-name">${factor}</td>
            <td>${Math.round(data.sum)}</td>
            <td>${data.average.toFixed(2)}</td>
            <td><span class="status-tag ${statusClass}">${statusText}</span></td>
        `;
        factorTableBody.appendChild(row);
    }

    // 生成因子解释说明
    generateFactorExplanations(scores.factorScores);
}

// 生成因子解释说明
function generateFactorExplanations(factorScores) {
    const factorExplanations = document.getElementById('factorExplanations');
    factorExplanations.innerHTML = '';

    // 因子解释文本
    const factorDescriptions = {
        '情感沉浸性': '主要反映对过往关系和前任的强烈情感联结、怀念与难以割舍的程度。包括反复回想美好时光、保留对方物品、理想化过去等表现。',
        '关系依赖性': '主要指因分手导致的自我价值感失落、难以独立生活、感到无法离开对方的情感依赖状态。表现为觉得生活失去意义、需要对方认可等。',
        '自我否定性': '反映个体过度的自我批评、自责、感到失败和无价值的倾向。包括认为分手是自己的错、觉得自己不值得被爱等表现。',
        '信任受损度': '反映对前任的信任破裂程度、猜疑、感到被伤害且难以修复的状态。表现为怀疑对方隐瞒、觉得对方不诚实等。',
        '消极归因': '主要指将分手原因固执地、负面地归咎于对方或外部因素，伴有怨恨和不公平感。表现为认为对方自私、从不理解自己等。',
        '冲动与敌对': '主要反映在情绪驱动下产生的冲动想法（如强行联系）、愤怒、争吵甚至报复的倾向。包括想打电话、想争吵、想报复等行为冲动。',
        '社交回避': '反映因分手或复合困扰而引发的社交兴趣减退、回避共同朋友或社交场合的行为。表现为避免社交活动、拒绝认识新朋友等。',
        '身心困扰': '反映情绪问题可能引发的躯体不适，如睡眠、饮食、精力等问题。包括睡眠困难、食欲变化、身体不适等症状。',
        '理性认知': '反映个体能否理性分析关系利弊、进行自我反思、接受现实并控制情绪的能力。得分越高表示越能理性看待问题。',
        '未来乐观性': '指对复合后的未来或对自己独自一人的未来抱有积极、乐观的期待和规划的信心。得分越高表示对未来越有信心。'
    };

    for (const [factor, data] of Object.entries(factorScores)) {
        if (data.average > 1.5) { // 只显示需要关注的因子
            const explanationDiv = document.createElement('div');
            const riskClass = getRiskClass(data.average);
            explanationDiv.className = `factor-explanation ${riskClass}`;

            const statusTag = `<span class="status-tag ${getStatusClass(data.average)}">${getStatusText(data.average)}</span>`;

            explanationDiv.innerHTML = `
                <div class="factor-title">
                    ${factor} ${statusTag}
                </div>
                <div class="factor-description">
                    ${factorDescriptions[factor] || '该因子的详细说明暂未提供。'}
                </div>
            `;

            factorExplanations.appendChild(explanationDiv);
        }
    }

    // 如果没有需要关注的因子，显示正常状态说明
    if (factorExplanations.children.length === 0) {
        const normalDiv = document.createElement('div');
        normalDiv.className = 'factor-explanation';
        normalDiv.innerHTML = `
            <div class="factor-title">
                整体状况 <span class="status-tag status-normal">正常</span>
            </div>
            <div class="factor-description">
                恭喜您！您的各项心理健康指标都在正常范围内。请继续保持良好的生活习惯和积极的心态，定期关注自己的心理健康状况。
            </div>
        `;
        factorExplanations.appendChild(normalDiv);
    }
}

// 获取评估级别
function getAssessmentLevel(score) {
    if (score <= 1.5) return "正常";
    if (score <= 2.5) return "轻度";
    if (score <= 3.5) return "中度";
    return "重度";
}

// 获取分数对应的CSS类
function getScoreClass(score) {
    if (score <= 1.5) return "score-normal";
    if (score <= 2.5) return "score-mild";
    if (score <= 3.5) return "score-moderate";
    return "score-severe";
}

// 获取状态标签的CSS类
function getStatusClass(score) {
    if (score <= 1.5) return "status-normal";
    if (score <= 2.5) return "status-mild";
    if (score <= 3.5) return "status-moderate";
    return "status-severe";
}

// 获取状态文本
function getStatusText(score) {
    if (score <= 1.5) return "正常";
    if (score <= 2.5) return "轻度";
    if (score <= 3.5) return "中度";
    return "重度";
}

// 获取风险等级CSS类
function getRiskClass(score) {
    if (score <= 1.5) return "";
    if (score <= 2.5) return "needs-attention";
    if (score <= 3.5) return "moderate-risk";
    return "high-risk";
}

// 事件监听器
document.addEventListener('DOMContentLoaded', () => {    
    // 开始测试
    startBtn.addEventListener('click', () => {
        // 隐藏所有初始内容
        document.querySelector('.header').style.display = 'none';
        document.querySelector('.description').style.display = 'none';
        document.querySelector('.start-section').style.display = 'none';

        // 显示题目部分
        document.getElementById('questionSection').style.display = 'block';
        updateQuestion();
    });
    
    // 选项选择
    const options = document.getElementsByName('answer');
    options.forEach(option => {
        option.addEventListener('change', () => {
            userAnswers[currentQuestion] = parseInt(option.value);
            
            // 当不是最后一题时，自动跳转到下一题
            if (currentQuestion < questions.length - 1) {
                setTimeout(() => {
                    currentQuestion++;
                    updateQuestion();
                }, 300); // 短暂延迟，让用户看到选择效果
            } else {
                // 是最后一题，显示提交按钮
                submitBtn.style.display = 'block';
                nextBtn.style.display = 'none';
            }
        });
    });
    
    // 上一题
    prevBtn.addEventListener('click', () => {
        if (currentQuestion > 0) {
            currentQuestion--;
            updateQuestion();
        }
    });
    
    // 下一题（保留但隐藏按钮，用于特殊情况）
    nextBtn.style.display = 'none';
    nextBtn.addEventListener('click', () => {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            updateQuestion();
        }
    });
    
    // 提交测试
    submitBtn.addEventListener('click', () => {
        // 检查是否所有问题都已回答
        if (userAnswers.some(answer => answer === 0)) {
            alert('请回答所有问题后再提交！');
            return;
        }
        
        // 先生成结果
        showResults();
        // 然后切换页面（这会同时隐藏题目部分）
        showPage('resultpage');
    });
    
    // 重新测试
    restartBtn.addEventListener('click', () => {
        currentQuestion = 0;
        userAnswers = new Array(90).fill(0);
        showPage('homepage');
        window.scrollTo({ top: 0, behavior: 'instant' });
    });
});