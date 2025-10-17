import { useNavigate } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Briefcase, FileText, BarChart3, ArrowRight, Shield } from "lucide-react"
import { Navigation } from "@/components/layout/Navigation"

export default function HomePage() {
  const navigate = useNavigate() 

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-slate-100">
      <Navigation />

      <main className="flex-1 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Streamline Hiring<br />
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
            A platform designed for efficient management. 
            Streamline job postings, candidates, and assessments with ease.
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate("/candidates")}
              className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={() => navigate('/jobs')}
              variant="outline" 
              size="lg"
              className="px-8 py-3 rounded-lg border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-700 transition-all duration-300"
            >
              View Demo
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {/* Job Management */}
          <Card 
            className="group hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02] border-0 shadow-md bg-white" 
            onClick={() => navigate("/jobs")}
          >
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-slate-200 transition-all duration-300">
                <Briefcase className="h-6 w-6 text-slate-700" />
              </div>
              <CardTitle className="text-xl font-semibold text-slate-900">Job Management</CardTitle>
              <CardDescription className="text-slate-600">
                Create and organize job postings with advanced filtering and search capabilities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="w-full text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all duration-300">
                Manage Jobs
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </CardContent>
          </Card>

          {/* Candidate Pipeline */}
          <Card 
            className="group hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02] border-0 shadow-md bg-white" 
            onClick={() => navigate("/candidates")}
          >
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-slate-200 transition-all duration-300">
                <Users className="h-6 w-6 text-slate-700" />
              </div>
              <CardTitle className="text-xl font-semibold text-slate-900">Candidate Pipeline</CardTitle>
              <CardDescription className="text-slate-600">
                Track candidates through your hiring stages with a visual kanban board.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="w-full text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all duration-300">
                View Pipeline
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </CardContent>
          </Card>

          {/* Smart Assessments */}
          <Card 
            className="group hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02] border-0 shadow-md bg-white"
            onClick={() => navigate("/assessments")}
          >
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-slate-200 transition-all duration-300">
                <FileText className="h-6 w-6 text-slate-700" />
              </div>
              <CardTitle className="text-xl font-semibold text-slate-900">Smart Assessments</CardTitle>
              <CardDescription className="text-slate-600">
                Build custom assessments with multiple question types and advanced validation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="w-full text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all duration-300">
                Create Assessment
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </CardContent>
          </Card>

          {/* Analytics */}
          <Card className="group hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-0 shadow-md bg-white" onClick={() => navigate('/analytics')}>
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-slate-700" />
              </div>
              <CardTitle className="text-xl font-semibold text-slate-900">Analytics & Reports</CardTitle>
              <CardDescription className="text-slate-600">
                Gain insights into hiring metrics and performance through comprehensive reports.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="w-full text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all duration-300">
                View Analytics
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Data Management */}
        <div className="bg-slate-800 rounded-xl p-8 text-white shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
              <Shield className="h-6 w-6 text-slate-300" />
            </div>
            <h3 className="text-2xl font-semibold">Data Management</h3>
          </div>
          <p className="text-slate-300 mb-8 leading-relaxed">
            Complete control over your hiring data with local storage, instant backups, and seamless portability for maximum security.
          </p>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-300">
              <span className="font-medium">Export All Data</span>
              <Button variant="secondary" size="sm" className="bg-slate-600 hover:bg-slate-500 text-white border-0" onClick={() => navigate('/analytics')}>
                Export
              </Button>
            </div>
            <div className="flex justify-between items-center p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-300">
              <span className="font-medium">Reset Database</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-slate-700/50 rounded-lg">
              <span className="font-medium">Storage Status</span>
              <span className="text-slate-300 text-sm font-medium">Local & Secure</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-8">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} TalentFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
