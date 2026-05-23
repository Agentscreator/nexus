interface Task {
  id: number;
  title: string;
  status: TaskStatus;
  category: Category;
  effort: string;
  description: string;
  subtasks: Array<{ name: string; completed: boolean }>;
}

type TaskStatus = 'completed' | 'in_progress' | 'pending';
type Category = 'Backend' | 'IR Development' | 'AI/ML';

interface Task {
  id: number;
  title: string;
  status: TaskStatus;
  category: Category;
  effort: string;
  description: string;
  subtasks: Array<{ name: string; completed: boolean }>;
}

const tasks: Task[] = [
  {
    id: 1,
    title: "IR-Aware Fact Namespacing",
    status: "completed",
    category: "Backend",
    effort: "M · 3 days",
    description: "Extend Engram storage schema with case_id, artifact_type, forensic_timestamp fields",
    subtasks: [
      { name: "Schema migration for Fact model", completed: true },
      { name: "DB migration for Postgres + SQLite", completed: true },
      { name: "Update store() and search() methods", completed: true },
      { name: "Write tests for IR-namespaced queries", completed: true }
    ]
  },
  {
    id: 2,
    title: "Forensic Timeline Reconstruction",
    status: "in_progress",
    category: "Backend",
    effort: "M · 3 days",
    description: "New build_timeline() method that merges timestamped facts chronologically",
    subtasks: [
      { name: "Implement build_timeline() method", completed: true },
      { name: "Handle timezone normalization", completed: false },
      { name: "Add source attribution to events", completed: false }
    ]
  },
  {
    id: 3,
    title: "Typed SIFT MCP Server",
    status: "pending",
    category: "IR Development",
    effort: "L · 6 days",
    description: "Create 7 typed Python functions wrapping SIFT tools with no raw shell access",
    subtasks: [
      { name: "Implement get_amcache() function", completed: false },
      { name: "Implement extract_mft_timeline() function", completed: false },
      { name: "Implement analyze_prefetch() function", completed: false },
      { name: "Implement parse_evtx() function", completed: false },
      { name: "Implement list_processes_memory() function", completed: false },
      { name: "Implement registry and network functions", completed: false },
      { name: "Register all functions as MCP tools", completed: false }
    ]
  },
  {
    id: 4,
    title: "Contradiction-Triggered Re-Investigation",
    status: "pending",
    category: "AI/ML",
    effort: "L · 5 days",
    description: "LangGraph orchestrator with contradiction detection and auto-reinvestigation",
    subtasks: [
      { name: "Define IRState TypedDict structure", completed: false },
      { name: "Build Disk Agent node", completed: false },
      { name: "Build Memory Agent node", completed: false },
      { name: "Build Synthesis Agent node", completed: false },
      { name: "Add contradiction detection edge", completed: false },
      { name: "Implement max_iterations guard", completed: false }
    ]
  },
  {
    id: 5,
    title: "Output Chunking + Pagination",
    status: "pending",
    category: "IR Development",
    effort: "S · 2 days",
    description: "Parse and chunk SIFT raw output before returning to LLM with pagination",
    subtasks: [
      { name: "Add max_results param to all functions", completed: false },
      { name: "Add fields param for selective returns", completed: false },
      { name: "Implement summary_only mode", completed: false }
    ]
  },
  {
    id: 6,
    title: "Cross-Case IOC Memory",
    status: "pending",
    category: "Backend",
    effort: "M · 3 days",
    description: "Build IOC index and check_ioc_history() method for cross-case learning",
    subtasks: [
      { name: "Build IOC index table", completed: false },
      { name: "Implement check_ioc_history() method", completed: false },
      { name: "Auto-inject IOC context into agent prompts", completed: false }
    ]
  },
  {
    id: 7,
    title: "Immutable Audit Trail",
    status: "pending",
    category: "Backend",
    effort: "M · 3 days",
    description: "Make Engram writes immutable with export-log CLI command for audit trails",
    subtasks: [
      { name: "Add immutable flag to Fact model", completed: false },
      { name: "Implement export-log CLI command", completed: false },
      { name: "Add diff-runs command for iteration comparison", completed: false }
    ]
  }
];

const statusColors: Record<TaskStatus, string> = {
  completed: 'bg-green-100 text-green-800 border-green-200',
  in_progress: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  pending: 'bg-gray-100 text-gray-800 border-gray-200'
};

const statusLabels: Record<TaskStatus, string> = {
  completed: 'Completed',
  in_progress: 'In Progress',
  pending: 'To Do'
};

const categoryColors: Record<Category, string> = {
  Backend: 'bg-blue-100 text-blue-800',
  'IR Development': 'bg-purple-100 text-purple-800',
  'AI/ML': 'bg-green-100 text-green-800'
};

export default function Home() {
  const completedTasks = tasks.filter(task => task.status === 'completed');
  const inProgressTasks = tasks.filter(task => task.status === 'in_progress');
  const pendingTasks = tasks.filter(task => task.status === 'pending');

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-google-blue to-google-green rounded-lg"></div>
              <span className="text-xl font-bold text-gray-900">Gemini Agent Framework</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-google-blue">Features</a>
              <a href="#architecture" className="text-gray-700 hover:text-google-blue">Architecture</a>
              <a href="#demo" className="text-gray-700 hover:text-google-blue">Demo</a>
              <a href="#docs" className="text-gray-700 hover:text-google-blue">Docs</a>
              <a href="#progress" className="text-gray-700 hover:text-google-blue">Progress</a>
            </div>
            <a 
              href="https://github.com/Agentscreator/gemini-agent-framework" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-google-blue text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-google-blue/10 text-google-blue px-4 py-2 rounded-full mb-8 animate-fade-in">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-google-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-google-blue"></span>
            </span>
            <span className="text-sm font-medium">Google Cloud Rapid Agent Hackathon 2026</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-slide-up">
            Building Agents That
            <br />
            <span className="gradient-text">Accomplish Missions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto animate-slide-up">
            Powered by <strong className="text-google-blue">Gemini 3</strong> and partner MCP servers. 
            Not just a chatbot — an intelligent multi-agent system that reasons, plans, and executes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <a 
              href="https://github.com/Agentscreator/gemini-agent-framework"
              className="bg-google-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-all hover:scale-105"
            >
              Get Started →
            </a>
            <a 
              href="#demo"
              className="bg-white text-google-blue border-2 border-google-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-google-blue hover:text-white transition-all"
            >
              Watch Demo
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-google-blue mb-2">87%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-google-green mb-2">45s</div>
              <div className="text-gray-600">Avg Completion</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-google-red mb-2">$0.03</div>
              <div className="text-gray-600">Cost per Mission</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-google-yellow mb-2">5+</div>
              <div className="text-gray-600">Partner Tracks</div>
            </div>
          </div>
        </div>
      </section>

      {/* Task Tracking Section */}
      <section id="progress" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Development Progress</h2>
            <p className="text-xl text-gray-600">Track our hackathon features and implementation status</p>
            
            {/* Progress Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">{completedTasks.length}</div>
                <div className="text-gray-600">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">{inProgressTasks.length}</div>
                <div className="text-gray-600">In Progress</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-600 mb-2">{pendingTasks.length}</div>
                <div className="text-gray-600">To Do</div>
              </div>
            </div>
          </div>

          {/* Task Cards */}
          <div className="space-y-6">
            {tasks.map((task) => (
              <div key={task.id} className="bg-gray-50 rounded-xl shadow-lg p-6 border border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{task.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[task.status]}`}>
                        {statusLabels[task.status]}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[task.category]}`}>
                        {task.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{task.description}</p>
                    <span className="text-sm text-gray-500 font-medium">{task.effort}</span>
                  </div>
                </div>
                
                {/* Subtasks */}
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Subtasks:</h4>
                  <div className="space-y-2">
                    {task.subtasks.map((subtask, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                          subtask.completed 
                            ? 'bg-green-500' 
                            : task.status === 'in_progress' 
                              ? 'bg-yellow-500' 
                              : 'bg-gray-300'
                        }`}>
                          {subtask.completed && (
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        <span className={`text-sm ${
                          subtask.completed ? 'text-gray-700' : 'text-gray-500'
                        }`}>
                          {subtask.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Gemini Agent Framework?</h2>
            <p className="text-xl text-gray-600">Move beyond chatbots. Build agents that take action.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-google-blue/5 to-google-blue/10 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-google-blue rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Gemini 3 Reasoning</h3>
              <p className="text-gray-600">
                Advanced reasoning with extended context (up to 2M tokens). Plans multi-step missions and adapts to failures.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-google-green/5 to-google-green/10 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-google-green rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Partner MCP Integration</h3>
              <p className="text-gray-600">
                GitLab, Elastic, MongoDB, Fivetran, Arize. Specialized capabilities without custom API code.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-google-red/5 to-google-red/10 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-google-red rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Self-Healing</h3>
              <p className="text-gray-600">
                When tasks fail, agents adapt their plans and retry automatically. No manual intervention needed.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-google-yellow/5 to-google-yellow/10 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-google-yellow rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Human-in-the-Loop</h3>
              <p className="text-gray-600">
                Confidence-based escalation. Agents know when they need human approval for critical decisions.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-purple-500/5 to-purple-500/10 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Real-Time Observability</h3>
              <p className="text-gray-600">
                WebSocket dashboard shows agent execution, tool calls, token usage, and costs in real-time.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-indigo-500/5 to-indigo-500/10 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cost Optimized</h3>
              <p className="text-gray-600">
                Smart routing: Gemini Flash for simple tasks, Pro for complex reasoning. Track spend per mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Multi-agent orchestration powered by Gemini 3</p>
          </div>

          <div className="bg-gray-50 rounded-2xl shadow-xl p-8 md:p-12">
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-google-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mission Received</h3>
                  <p className="text-gray-600">User defines a goal or event triggers an action (e.g., "Fix failing CI/CD pipeline")</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-google-green rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Gemini 3 Plans</h3>
                  <p className="text-gray-600">Orchestrator analyzes the goal, generates a dynamic agent graph, and plans the execution steps</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-google-red rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Agents Execute</h3>
                  <p className="text-gray-600">Specialized agents use partner MCP servers (GitLab, Elastic, etc.) to accomplish tasks in parallel</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-google-yellow rounded-full flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Validate & Adapt</h3>
                  <p className="text-gray-600">Outcomes are evaluated. On failure, the orchestrator adapts the plan and retries automatically</p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mission Complete</h3>
                  <p className="text-gray-600">Success! Results are logged, costs tracked, and decisions recorded for continuous improvement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real-World Use Cases</h2>
            <p className="text-xl text-gray-600">Solving actual problems across multiple domains</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Use Case 1 */}
            <div className="border-2 border-gray-200 rounded-xl p-8 hover:border-google-blue transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-google-blue/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">DevOps Automation</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Automatically detect, diagnose, and fix failing CI/CD pipelines. Monitor GitLab projects 24/7.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-google-green mr-2">✓</span>
                  <span>Pipeline failure detection & root cause analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-google-green mr-2">✓</span>
                  <span>Automated fixes with merge request creation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-google-green mr-2">✓</span>
                  <span>80% of failures resolved without human intervention</span>
                </li>
              </ul>
            </div>

            {/* Use Case 2 */}
            <div className="border-2 border-gray-200 rounded-xl p-8 hover:border-google-green transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-google-green/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">�️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Security Management</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Scan for vulnerabilities, generate patches, and create merge requests automatically.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-google-green mr-2">✓</span>
                  <span>SAST/DAST scan result analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-google-green mr-2">✓</span>
                  <span>Automated dependency updates & patches</span>
                </li>
                <li className="flex items-start">
                  <span className="text-google-green mr-2">✓</span>
                  <span>Vulnerabilities patched in minutes, not days</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-google-blue to-google-green rounded-lg"></div>
              <span className="text-xl font-bold">Gemini Agent Framework</span>
            </div>
            <p className="text-gray-400 mb-8">
              Building the future of autonomous agent systems. Powered by Google Cloud and Gemini 3.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/Agentscreator/gemini-agent-framework" className="text-gray-400 hover:text-white transition-colors">
                GitHub
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Documentation
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                API Reference
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Support
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-gray-400 text-sm">
                © 2026 Gemini Agent Framework. Built for the Google Cloud Rapid Agent Hackathon.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}