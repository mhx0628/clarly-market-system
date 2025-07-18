# AI开发团队协作工作流

这个文档描述了如何协调我们设计的AI开发团队（PMA, CTO/PE, QO Engineer）进行高效的项目开发。

## 核心理念

协作的核心是基于任务的异步工作流。每个智能体完成其指定的任务，并将输出作为下一个智能体输入的触发器。您（或一个项目经理智能体）是这个流程的中心协调者。

## 工作流程步骤

1.  **启动 (您 -> PMA)**
    *   **您的角色**: 提供高层次的项目需求、目标或一个初步的想法。
    *   **触发**: 将您的需求作为输入，启动 **产品经理/架构师 (PMA)** 智能体。
    *   **示例**: “我需要一个澄迈市场管理微信小程序，包含商户管理、商品展示和用户下单功能。”

2.  **需求与架构 (PMA -> CTO/PE)**
    *   **PMA 的任务**: 
        1.  将您的需求分解为详细的用户故事和功能列表。
        2.  设计系统架构，定义数据模型和API接口。
        3.  创建一系列明确、可执行的开发任务。
    *   **PMA 的输出**: 一个包含详细规格说明的文档（例如 `project_spec.md`）和一个任务列表（例如在 `tasks.md` 或项目管理工具中）。
    *   **触发**: 将规格说明和任务列表交给 **首席技术官/首席工程师 (CTO/PE)** 智能体。

3.  **开发与测试 (CTO/PE -> QO Engineer)**
    *   **CTO/PE 的任务**:
        1.  根据PMA提供的任务，逐一实现功能。
        2.  编写高质量、经过单元测试的代码。
        3.  将代码提交到版本控制系统（例如Git）。
    *   **CTO/PE 的输出**: 功能完整的代码分支或提交。
    *   **触发**: 当一个功能或模块开发完成后，通知 **质量与运维工程师 (QO Engineer)** 智能体进行测试。

4.  **质量保证与部署 (QO Engineer -> 您)**
    *   **QO Engineer 的任务**:
        1.  运行自动化测试（E2E测试、集成测试）。
        2.  检查代码是否符合质量标准。
        3.  如果测试通过，则将代码部署到测试或生产环境。
        4.  设置监控和警报。
    *   **QO Engineer 的输出**: 一份测试报告和一个成功部署的通知。如果失败，则提供详细的错误报告给CTO/PE进行修复。
    *   **触发**: 向您报告开发进度、部署状态和系统健康状况。

5.  **迭代与反馈 (您 -> PMA)**
    *   **您的角色**: 审查已部署的功能，提供反馈或提出新的需求。
    *   **触发**: 您的反馈将启动新一轮的开发周期，回到第一步。

## 如何在IDE中实现

您可以通过为每个智能体开设一个单独的终端或聊天窗口来模拟这个流程。您将手动地将一个智能体的输出（例如，PMA生成的任务列表文件）作为输入提供给下一个智能体。

为了实现更高级的自动化，可以编写一个脚本来协调这些智能体的调用，但这超出了当前的设计范围。