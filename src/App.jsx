import React, { useState } from 'react';
import { ChevronRight, Users, CheckCircle, XCircle, AlertCircle, FileText, CreditCard, Phone, DollarSign } from 'lucide-react';

const FlowChart = () => {
  const [activeView, setActiveView] = useState('overview');

  const views = [
    { id: 'overview', label: 'Overview Flow' },
    { id: 'detailed', label: 'Detailed Process' },
    { id: 'decision', label: 'Decision Logic' },
    { id: 'agents', label: 'Agent Architecture' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            BFSI Agentic AI System
          </h1>
          <p className="text-gray-600">Personal Loan Chatbot - Flow Visualization</p>
        </div>

        {/* View Selector */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {views.map(view => (
            <button
              key={view.id}
              onClick={() => setActiveView(view.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeView === view.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {view.label}
            </button>
          ))}
        </div>

        {/* Flowchart Content */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {activeView === 'overview' && <OverviewFlow />}
          {activeView === 'detailed' && <DetailedFlow />}
          {activeView === 'decision' && <DecisionLogic />}
          {activeView === 'agents' && <AgentArchitecture />}
        </div>
      </div>
    </div>
  );
};

const OverviewFlow = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        High-Level Process Overview
      </h2>
      
      <div className="flex flex-col items-center space-y-4">
        {/* Step 1 */}
        <FlowBox 
          icon={<Users className="w-6 h-6" />}
          title="Customer Entry"
          desc="Via Digital Ad / Marketing Email"
          color="bg-purple-500"
        />
        
        <Arrow />
        
        {/* Step 2 */}
        <FlowBox 
          icon={<CreditCard className="w-6 h-6" />}
          title="Master Agent Greets"
          desc="Initiates conversation, understands needs"
          color="bg-blue-500"
        />
        
        <Arrow />
        
        {/* Step 3 - Worker Agents */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border-2 border-blue-300 w-full max-w-2xl">
          <h3 className="font-bold text-lg text-center mb-4 text-gray-800">
            Worker Agents Execute Tasks
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <WorkerCard 
              icon={<DollarSign className="w-5 h-5" />}
              title="Sales Agent"
              tasks={["Discuss needs", "Negotiate terms", "Loan amount & tenure"]}
            />
            <WorkerCard 
              icon={<Phone className="w-5 h-5" />}
              title="Verification Agent"
              tasks={["Verify phone", "Check address", "KYC validation"]}
            />
            <WorkerCard 
              icon={<CheckCircle className="w-5 h-5" />}
              title="Underwriting Agent"
              tasks={["Fetch credit score", "Check eligibility", "Request documents"]}
            />
            <WorkerCard 
              icon={<FileText className="w-5 h-5" />}
              title="Sanction Agent"
              tasks={["Generate PDF", "Loan approval letter", "Terms & conditions"]}
            />
          </div>
        </div>
        
        <Arrow />
        
        {/* Step 4 */}
        <div className="flex gap-8">
          <FlowBox 
            icon={<CheckCircle className="w-6 h-6" />}
            title="Approved ✓"
            desc="Sanction letter generated"
            color="bg-green-500"
          />
          <FlowBox 
            icon={<XCircle className="w-6 h-6" />}
            title="Rejected ✗"
            desc="Alternative options offered"
            color="bg-red-500"
          />
        </div>
      </div>
    </div>
  );
};

const DetailedFlow = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Detailed Step-by-Step Process
      </h2>
      
      <div className="space-y-4">
        <ProcessStep 
          num="1"
          title="Customer Lands on Chatbot"
          details={["Clicks digital ad or email link", "Web chatbot interface loads", "Master Agent activates"]}
          color="bg-purple-100"
        />
        
        <ProcessStep 
          num="2"
          title="Initial Conversation (Master + Sales Agent)"
          details={[
            "Master: 'Hello! Looking for a personal loan?'",
            "Sales Agent takes over: Understands loan purpose",
            "Discusses amount needed, tenure preference",
            "Explains interest rates and benefits"
          ]}
          color="bg-blue-100"
        />
        
        <ProcessStep 
          num="3"
          title="Customer Agrees to Proceed"
          details={[
            "Master Agent: 'Great! Let me verify your details'",
            "Hands over to Verification Agent"
          ]}
          color="bg-green-100"
        />
        
        <ProcessStep 
          num="4"
          title="KYC Verification"
          details={[
            "Verification Agent fetches data from CRM",
            "Confirms phone number (OTP)",
            "Verifies address details",
            "Updates Master Agent: 'Verification Complete'"
          ]}
          color="bg-yellow-100"
        />
        
        <ProcessStep 
          num="5"
          title="Credit Assessment"
          details={[
            "Underwriting Agent calls Credit Bureau API",
            "Fetches credit score (out of 900)",
            "Retrieves pre-approved limit from Offer Mart",
            "Evaluates eligibility based on rules"
          ]}
          color="bg-orange-100"
        />
        
        <ProcessStep 
          num="6A"
          title="Scenario A: Instant Approval"
          details={[
            "Loan amount ≤ Pre-approved limit",
            "Credit score ≥ 700",
            "Underwriting Agent: 'Approved!'",
            "Master hands to Sanction Letter Generator"
          ]}
          color="bg-green-100"
        />
        
        <ProcessStep 
          num="6B"
          title="Scenario B: Document Required"
          details={[
            "Loan amount ≤ 2× Pre-approved limit",
            "Master: 'Please upload salary slip'",
            "Underwriting Agent validates: EMI ≤ 50% salary",
            "If valid → Approve, else → Reject"
          ]}
          color="bg-yellow-100"
        />
        
        <ProcessStep 
          num="6C"
          title="Scenario C: Rejection"
          details={[
            "Loan > 2× limit OR Credit score < 700",
            "Master: 'Sorry, we cannot process this now'",
            "Offers alternatives: Lower amount or secured loan",
            "Conversation ends gracefully"
          ]}
          color="bg-red-100"
        />
        
        <ProcessStep 
          num="7"
          title="Sanction Letter Generation"
          details={[
            "Sanction Agent creates PDF with:",
            "- Customer details",
            "- Loan amount, tenure, interest rate",
            "- EMI schedule",
            "Master: 'Congratulations! Here's your approval letter'"
          ]}
          color="bg-green-100"
        />
        
        <ProcessStep 
          num="8"
          title="Conversation Closure"
          details={[
            "Master Agent: 'Thank you! Check email for next steps'",
            "Logs entire interaction",
            "Chat ends"
          ]}
          color="bg-gray-100"
        />
      </div>
    </div>
  );
};

const DecisionLogic = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Underwriting Decision Logic
      </h2>
      
      <div className="bg-gray-50 p-6 rounded-xl">
        <div className="flex flex-col items-center space-y-6">
          {/* Start */}
          <div className="bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-center">
            Customer Requests Loan
            <div className="text-sm font-normal mt-2">Amount: X | Pre-approved: P</div>
          </div>
          
          <div className="text-2xl">↓</div>
          
          {/* First Decision */}
          <div className="bg-yellow-100 border-4 border-yellow-400 p-6 rounded-lg text-center w-full max-w-md">
            <div className="font-bold text-lg mb-2">Is Credit Score ≥ 700?</div>
          </div>
          
          <div className="flex gap-12 w-full justify-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="font-bold text-green-600">YES ✓</div>
              <div className="text-2xl">↓</div>
              
              {/* Second Decision */}
              <div className="bg-yellow-100 border-4 border-yellow-400 p-4 rounded-lg text-center max-w-xs">
                <div className="font-bold">Is X ≤ P?</div>
                <div className="text-sm mt-2">(Loan ≤ Pre-approved)</div>
              </div>
              
              <div className="flex gap-8">
                <div className="flex flex-col items-center space-y-2">
                  <div className="text-green-600 font-bold">YES</div>
                  <div className="bg-green-500 text-white px-4 py-3 rounded-lg font-bold text-center">
                    ✓ INSTANT<br/>APPROVAL
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-2">
                  <div className="text-orange-600 font-bold">NO</div>
                  <div className="text-2xl">↓</div>
                  
                  {/* Third Decision */}
                  <div className="bg-yellow-100 border-4 border-yellow-400 p-4 rounded-lg text-center max-w-xs">
                    <div className="font-bold">Is X ≤ 2×P?</div>
                  </div>
                  
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="text-green-600 font-bold">YES</div>
                      <div className="bg-orange-400 text-white px-4 py-3 rounded-lg text-center text-sm max-w-xs">
                        Request<br/>Salary Slip
                      </div>
                      <div className="text-xs">↓</div>
                      <div className="bg-yellow-100 border-2 border-orange-400 p-2 rounded text-center text-xs">
                        EMI ≤ 50%<br/>of Salary?
                      </div>
                      <div className="flex gap-2">
                        <div className="bg-green-500 text-white px-2 py-1 rounded text-xs">✓ Yes<br/>Approve</div>
                        <div className="bg-red-500 text-white px-2 py-1 rounded text-xs">✗ No<br/>Reject</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                      <div className="text-red-600 font-bold">NO</div>
                      <div className="bg-red-500 text-white px-4 py-3 rounded-lg font-bold text-center">
                        ✗ REJECT<br/>Too High
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              <div className="font-bold text-red-600">NO ✗</div>
              <div className="text-2xl">↓</div>
              <div className="bg-red-500 text-white px-6 py-4 rounded-lg font-bold text-center">
                ✗ REJECT<br/>Low Credit<br/>Score
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Legend */}
      <div className="bg-blue-50 p-4 rounded-lg mt-8">
        <h3 className="font-bold mb-3">Legend:</h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div><span className="font-bold">X</span> = Requested loan amount</div>
          <div><span className="font-bold">P</span> = Pre-approved limit</div>
          <div><span className="font-bold">EMI</span> = Monthly installment</div>
          <div><span className="font-bold">2×P</span> = Twice the pre-approved limit</div>
        </div>
      </div>
    </div>
  );
};

const AgentArchitecture = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Agent Architecture & Communication
      </h2>
      
      <div className="flex flex-col items-center space-y-8">
        {/* Customer Layer */}
        <div className="w-full max-w-3xl bg-purple-100 p-6 rounded-xl border-2 border-purple-400">
          <div className="text-center">
            <Users className="w-12 h-12 mx-auto mb-2 text-purple-600" />
            <h3 className="font-bold text-lg">Customer Interface</h3>
            <p className="text-sm text-gray-600">Web Chatbot</p>
          </div>
        </div>
        
        <div className="text-2xl">↕️</div>
        
        {/* Master Agent */}
        <div className="w-full max-w-3xl bg-blue-500 text-white p-6 rounded-xl shadow-lg">
          <div className="text-center">
            <h3 className="font-bold text-2xl mb-2">🎯 MASTER AGENT</h3>
            <p className="text-sm">Orchestrator & Conversation Manager</p>
          </div>
          <div className="mt-4 bg-blue-600 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Responsibilities:</h4>
            <ul className="text-sm space-y-1">
              <li>✓ Maintains conversation context</li>
              <li>✓ Routes tasks to Worker Agents</li>
              <li>✓ Collects results and makes decisions</li>
              <li>✓ Ensures smooth customer experience</li>
            </ul>
          </div>
        </div>
        
        <div className="text-2xl">↓</div>
        
        {/* Worker Agents Grid */}
        <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
          {/* Sales Agent */}
          <div className="bg-green-100 p-6 rounded-xl border-2 border-green-400">
            <DollarSign className="w-10 h-10 text-green-600 mb-2" />
            <h4 className="font-bold text-lg mb-2">Sales Agent</h4>
            <div className="text-sm space-y-1">
              <div><strong>Input:</strong> Customer intent</div>
              <div><strong>Tasks:</strong></div>
              <ul className="ml-4 list-disc">
                <li>Understand needs</li>
                <li>Propose loan terms</li>
                <li>Handle negotiations</li>
              </ul>
              <div><strong>Output:</strong> Agreed terms</div>
            </div>
          </div>
          
          {/* Verification Agent */}
          <div className="bg-yellow-100 p-6 rounded-xl border-2 border-yellow-400">
            <Phone className="w-10 h-10 text-yellow-600 mb-2" />
            <h4 className="font-bold text-lg mb-2">Verification Agent</h4>
            <div className="text-sm space-y-1">
              <div><strong>Input:</strong> Customer ID</div>
              <div><strong>Tasks:</strong></div>
              <ul className="ml-4 list-disc">
                <li>Fetch CRM data</li>
                <li>Verify phone (OTP)</li>
                <li>Confirm address</li>
              </ul>
              <div><strong>Output:</strong> KYC status</div>
            </div>
          </div>
          
          {/* Underwriting Agent */}
          <div className="bg-orange-100 p-6 rounded-xl border-2 border-orange-400">
            <CheckCircle className="w-10 h-10 text-orange-600 mb-2" />
            <h4 className="font-bold text-lg mb-2">Underwriting Agent</h4>
            <div className="text-sm space-y-1">
              <div><strong>Input:</strong> Loan details</div>
              <div><strong>Tasks:</strong></div>
              <ul className="ml-4 list-disc">
                <li>Call Credit Bureau API</li>
                <li>Check pre-approved limit</li>
                <li>Evaluate eligibility</li>
              </ul>
              <div><strong>Output:</strong> Approve/Reject</div>
            </div>
          </div>
          
          {/* Sanction Letter Agent */}
          <div className="bg-indigo-100 p-6 rounded-xl border-2 border-indigo-400">
            <FileText className="w-10 h-10 text-indigo-600 mb-2" />
            <h4 className="font-bold text-lg mb-2">Sanction Letter Agent</h4>
            <div className="text-sm space-y-1">
              <div><strong>Input:</strong> Approval data</div>
              <div><strong>Tasks:</strong></div>
              <ul className="ml-4 list-disc">
                <li>Generate PDF</li>
                <li>Include all terms</li>
                <li>EMI schedule</li>
              </ul>
              <div><strong>Output:</strong> Sanction letter</div>
            </div>
          </div>
        </div>
        
        <div className="text-2xl">↓</div>
        
        {/* Backend Systems */}
        <div className="w-full max-w-4xl bg-gray-100 p-6 rounded-xl border-2 border-gray-400">
          <h3 className="font-bold text-lg text-center mb-4">Backend Systems & APIs</h3>
          <div className="grid grid-cols-4 gap-4 text-center text-sm">
            <div className="bg-white p-3 rounded-lg shadow">
              <div className="font-bold">CRM Server</div>
              <div className="text-xs text-gray-600">Customer KYC</div>
            </div>
            <div className="bg-white p-3 rounded-lg shadow">
              <div className="font-bold">Credit Bureau</div>
              <div className="text-xs text-gray-600">Credit Scores</div>
            </div>
            <div className="bg-white p-3 rounded-lg shadow">
              <div className="font-bold">Offer Mart</div>
              <div className="text-xs text-gray-600">Pre-approvals</div>
            </div>
            <div className="bg-white p-3 rounded-lg shadow">
              <div className="font-bold">Document Store</div>
              <div className="text-xs text-gray-600">File uploads</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Components
const FlowBox = ({ icon, title, desc, color }) => (
  <div className={`${color} text-white p-6 rounded-xl shadow-lg w-80 text-center`}>
    <div className="flex justify-center mb-2">{icon}</div>
    <h3 className="font-bold text-lg mb-1">{title}</h3>
    <p className="text-sm opacity-90">{desc}</p>
  </div>
);

const Arrow = () => (
  <div className="text-4xl text-gray-400">↓</div>
);

const WorkerCard = ({ icon, title, tasks }) => (
  <div className="bg-white p-4 rounded-lg shadow border-2 border-blue-200">
    <div className="flex items-center gap-2 mb-3">
      <div className="text-blue-600">{icon}</div>
      <h4 className="font-bold text-sm">{title}</h4>
    </div>
    <ul className="text-xs space-y-1 text-gray-600">
      {tasks.map((task, i) => (
        <li key={i}>• {task}</li>
      ))}
    </ul>
  </div>
);

const ProcessStep = ({ num, title, details, color }) => (
  <div className={`${color} p-5 rounded-lg border-l-4 border-gray-400`}>
    <div className="flex items-start gap-4">
      <div className="bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
        {num}
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <ul className="space-y-1 text-sm">
          {details.map((detail, i) => (
            <li key={i} className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default FlowChart;