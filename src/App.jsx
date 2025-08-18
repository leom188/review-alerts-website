import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion.jsx'
import { AlertTriangle, Shield, Search, MapPin, DollarSign, Clock, Users, CreditCard, CheckCircle, XCircle, LucideTractor } from 'lucide-react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('purpose')

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-slate-900">InAct</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('purpose')}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${activeSection === 'purpose' ? 'text-blue-600' : 'text-slate-600'}`}
              >
                Purpose & Scope
              </button>
              <button 
                onClick={() => scrollToSection('generation')}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${activeSection === 'generation' ? 'text-blue-600' : 'text-slate-600'}`}
              >
                Alert Generation
              </button>
              <button 
                onClick={() => scrollToSection('review')}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${activeSection === 'review' ? 'text-blue-600' : 'text-slate-600'}`}
              >
                Review Process
              </button>
              <button 
                onClick={() => scrollToSection('disposition')}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${activeSection === 'disposition' ? 'text-blue-600' : 'text-slate-600'}`}
              >
                Alert Disposition
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-100 rounded-full">
              <AlertTriangle className="h-12 w-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            InAct Alert Review Process
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Standardized process for reviewing and dispositioning alerts generated within the InAct transaction monitoring system
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('purpose')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('review')}
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
            >
              Review Process
            </Button>
          </div>
        </div>
      </section>

      {/* Purpose and Scope Section */}
      <section id="purpose" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Purpose and Scope</h2>
            <p className="text-lg text-slate-600">Establishing standardized alert review processes</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  Objective of Alert Review
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    Evaluate each alert to determine whether transactions represent genuine suspicious activity or false positives
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    Ensure appropriate closure of alerts
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    Escalate potentially suspicious activities to the Compliance team
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    Initiate Requests for Information (RFI) when additional customer details are required
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    Maintain regulatory compliance and audit trail requirements
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-blue-600" />
                  Scope of Alerts Covered
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Badge variant="secondary" className="mb-2">Transaction Monitoring</Badge>
                    <p className="text-slate-600">All Near Real Time transaction monitoring alerts generated by InAct's rule-based system</p>
                  </div>
                  <div>
                    <Badge variant="secondary" className="mb-2">Transaction Types</Badge>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Wire Transfer</Badge>
                      <Badge variant="outline">EFT</Badge>
                      <Badge variant="outline">E-transfer</Badge>
                      <Badge variant="outline">CARD</Badge>
                      <Badge variant="outline">Bill Payment</Badge>
                    </div>
                  </div>
                  <div>
                    <Badge variant="secondary" className="mb-2">Coverage</Badge>
                    <p className="text-slate-600">Alerts across all client portfolios managed within InAct</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Alert Generation Overview Section */}
      <section id="generation" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Alert Generation Overview</h2>
            <p className="text-lg text-slate-600">How InAct automatically generates alerts based on predefined business rules</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-6 w-6 text-purple-600" />
                  How Alerts are Triggered
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-semibold text-sm">1</span>
                    </div>
                    <p className="text-slate-600">InAct receives transaction data from Bridge (the core transaction processing system)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-semibold text-sm">2</span>
                    </div>
                    <p className="text-slate-600">Each transaction is automatically evaluated against all active monitoring rules</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-semibold text-sm">3</span>
                    </div>
                    <p className="text-slate-600">When a transaction meets the criteria of one or more rules, an alert is generated</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-semibold text-sm">4</span>
                    </div>
                    <p className="text-slate-600">Multiple rules triggered by the same transaction are consolidated into a single alert record</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-6 w-6 text-green-600" />
                  Types of Scenarios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="nrt" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="nrt">Near Real Time</TabsTrigger>
                    <TabsTrigger value="rt">Real Time</TabsTrigger>
                  </TabsList>
                  <TabsContent value="nrt" className="space-y-3">
                    <Badge className="bg-green-100 text-green-800">Currently Active</Badge>
                    <p className="text-sm text-slate-600">Rules executed with a slight delay, typically within seconds to minutes after the transaction occurs.</p>
                    <p className="text-sm text-slate-600"><strong>Purpose:</strong> Used for fraud detection and analysis where immediate action isn't critical, but timely intervention is still necessary.</p>
                  </TabsContent>
                  <TabsContent value="rt" className="space-y-3">
                    <Badge variant="outline" className="text-slate-500">Not Implemented Yet</Badge>
                    <p className="text-sm text-slate-600">Rules executed instantly, typically within milliseconds, as transactions occur.</p>
                    <p className="text-sm text-slate-600"><strong>Purpose:</strong> Designed for immediate action to prevent fraud during critical, time-sensitive processes.</p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-orange-600" />
                Common Alert Categories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <div className="text-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <Search className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Keyword Search</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Large Cash</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Structuring</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <MapPin className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Geographic Risk</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Velocity Checks</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <XCircle className="h-8 w-8 text-slate-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Blacklists</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Alert Review Process Section */}
      <section id="review" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Alert Review Process</h2>
            <p className="text-lg text-slate-600">Detailed approach for reviewing different types of alerts</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="drug-keywords" className="border border-slate-200 rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <Search className="h-5 w-5 text-blue-600" />
                  <span className="text-lg font-semibold">Drug Keyword Scenarios</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Review Process:</h4>
                    <ol className="space-y-2 text-slate-600">
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-blue-600">1.</span>
                        Carefully examine all available transaction data
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-blue-600">2.</span>
                        Identify which keyword(s) triggered the flag
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-blue-600">3.</span>
                        Analyze the context in which the keyword appears
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-blue-600">4.</span>
                        Consider factors to determine if the transaction is suspicious or a false positive
                      </li>
                    </ol>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-red-200 bg-red-50">
                      <CardHeader>
                        <CardTitle className="text-red-800 text-base">More Likely Suspicious</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-red-700">
                        <ul className="space-y-1">
                          <li>• Keywords directly related to drugs (weed, cannabis, ganja, Kush, etc.)</li>
                          <li>• Keywords in drug-related context (e.g., "what time is it – 420")</li>
                          <li>• Customer email suggests drug business involvement</li>
                          <li>• Multiple drug-related keywords present</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-green-200 bg-green-50">
                      <CardHeader>
                        <CardTitle className="text-green-800 text-base">More Likely False Positive</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-green-700">
                        <ul className="space-y-1">
                          <li>• Keyword part of innocent name (e.g., "Tweedle" containing "weed")</li>
                          <li>• Keyword has clear non-drug-related meaning in context</li>
                          <li>• Keyword presence can be reasonably explained without drug relation</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="geographic-risk" className="border border-slate-200 rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-red-600" />
                  <span className="text-lg font-semibold">Geographic Risk Scenarios</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <Tabs defaultValue="ip-location" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="ip-location">IP/Location-Based</TabsTrigger>
                    <TabsTrigger value="country-mention">Country Name Mention</TabsTrigger>
                  </TabsList>
                  <TabsContent value="ip-location" className="space-y-4">
                    <p className="text-slate-600">Triggered when transactions are executed from sanctioned or restricted countries</p>
                    <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Review Process:</h4>
                    <ol className="space-y-2 text-slate-600">
                      <li>1. Identify the high-risk jurisdiction where the transaction was executed</li>
                      <li>2. Analyze transaction frecuency and patterns from that location</li>
                      <li>3. Examine timing and duration of activity from the hih-risk area</li>
                    </ol>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="border-red-200 bg-red-50">
                        <CardHeader>
                          <CardTitle className="text-red-800 text-base">More Likely Suspicious</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-red-700">
                          <ul className="space-y-1">
                            <li>• Frequent, ongoing transactions from high-risk locations</li>
                            <li>• Sudden shift to executing all transactions from high-risk geography</li>
                            <li>• High volume/value transactions from restricted areas</li>
                          </ul>
                        </CardContent>
                      </Card>
                      <Card className="border-green-200 bg-green-50">
                        <CardHeader>
                          <CardTitle className="text-green-800 text-base">More Likely False Positive</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-green-700">
                          <ul className="space-y-1">
                            <li>• Infrequent transactions consistent with temporary travel</li>
                            <li>• Short-term activity followed by return to normal patterns</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                  <TabsContent value="country-mention" className="space-y-4">
                    <p className="text-slate-600">Triggered when high-risk or sanctioned country names appear in transaction data</p>
                    <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Review Process:</h4>
                    <ol className="space-y-2 text-slate-600">
                      <li>1. Identify which country name(s) triggerend the Alert</li>
                      <li>2. Examine the exact context where the country name appears</li>
                      <li>3. Determine if the mention indicates intent to send/receive money from/to that country</li>
                      <li>4. Assess whether the mention is transactional or conversational</li>
                    </ol>
                  </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="border-red-200 bg-red-50">
                        <CardHeader>
                          <CardTitle className="text-red-800 text-base">More Likely Suspicious</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-red-700">
                          <ul className="space-y-1">
                            <li>• Clear indication of intent to send money: "to my uncle in Pakistan"</li>
                            <li>• Instructions involving sanctioned countries</li>
                            <li>• Business-related mentions: "payment for goods from North Korea"</li>
                          </ul>
                        </CardContent>
                      </Card>
                      <Card className="border-green-200 bg-green-50">
                        <CardHeader>
                          <CardTitle className="text-green-800 text-base">More Likely False Positive</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-green-700">
                          <ul className="space-y-1">
                            <li>• Casual conversation: "Where are my parents from? - Pakistan"</li>
                            <li>• News or general discussion: "Food? - Egyptian"</li>
                            <li>• Educational context: "I'm studying about North Korea"</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="large-cash" className="border border-slate-200 rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  <span className="text-lg font-semibold">Large Cash Transaction Scenarios</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Review Process:</h4>
                    <ol className="space-y-2 text-slate-600">
                      <li>1. Review transaction amount and frequency</li>
                      <li>2. Examine customer's typical transaction patterns</li>
                      <li>3. Assess business type and expected cash flow</li>
                      <li>4. Consider if amount exceeds normal pattern, legitimate business reason exists, or transactions are structured to avoid thresholds</li>
                    </ol>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="border-red-200 bg-red-50">
                      <CardHeader>
                        <CardTitle className="text-red-800 text-base">More Likely Suspicious</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-red-700">
                        Multiple transactions just below thresholds, inconsistent with business type
                      </CardContent>
                    </Card>
                    <Card className="border-green-200 bg-green-50">
                      <CardHeader>
                        <CardTitle className="text-green-800 text-base">More Likely False Positive</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-green-700">
                        Consistent with business model (retail, restaurant), seasonal patterns
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="velocity" className="border border-slate-200 rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-orange-600" />
                  <span className="text-lg font-semibold">Velocity/Frequency Scenarios</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Review Process:</h4>
                    <ol className="space-y-2 text-slate-600">
                      <li>1. Analyze transaction frequency and timing</li>
                      <li>2. Compare to customer's historical patterns</li>
                      <li>3. Review account opening date and activity buildup</li>
                      <li>4. Consider sudden increases, off-hours activity, and rapid fund movement</li>
                    </ol>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="border-red-200 bg-red-50">
                      <CardHeader>
                        <CardTitle className="text-red-800 text-base">More Likely Suspicious</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-red-700">
                        <ul className="space-y-1">
                          <li>• Sudden dramatic increase (e.g., 3 to 50 transactions/month)</li>
                          <li>• Rapid-fire transactions within minutes/hours</li>
                          <li>• High frequency during unusual hours</li>
                          <li>• High volume immediately after account opening</li>
                          <li>• Round-number patterns of same amounts</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="border-green-200 bg-green-50">
                      <CardHeader>
                        <CardTitle className="text-green-800 text-base">More Likely False Positive</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-green-700">
                        <ul className="space-y-1">
                          <li>• Gradual increase over time</li>
                          <li>• Seasonal patterns (holidays, tax season)</li>
                          <li>• Business hours consistent with industry</li>
                          <li>• Explained business changes or expansion</li>
                          <li>• Payroll or recurring payment patterns</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="blacklist" className="border border-slate-200 rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <XCircle className="h-5 w-5 text-slate-600" />
                  <span className="text-lg font-semibold">Blacklist Scenarios</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-red-800">⚠️ Critical Alert</CardTitle>
                  </CardHeader>
                  <CardContent className="text-red-700">
                    <p className="font-semibold mb-2">All blacklist scenarios should be escalated to compliance regardless of:</p>
                    <ul className="space-y-1">
                      <li>• Transaction amount (small or large)</li>
                      <li>• Customer's historical activity patterns</li>
                      <li>• Apparent innocent context</li>
                      <li>• Customer explanations or justifications</li>
                      <li>• Frequency of similar transactions</li>
                    </ul>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="card-transactions" className="border border-slate-200 rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-purple-600" />
                  <span className="text-lg font-semibold">Alerted Card Transactions</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Aditional Considerations for Alerted Card Transactions:</h4>
                  <ol className="space-y-2 text-slate-600">
                    <li>1. Consider the nature of the client's business</li>
                    <li>2. Examine card transaction details (merchant, location, amount, timing)</li>
                    <li>3. Review cardholder's typical spending patterns and geographic usage</li>
                    <li>4. Assess merchant category codes (MCC)</li>
                    <li>5. Analyze transaction sequence and velocity patterns</li>
                    <li>6. Consider transaction status, response codes, error codes</li>
                  </ol>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
           <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LucideTractor className="h-6 w-6 text-yellow-600" />
                Additional Tools and Resources
              </CardTitle>
            </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    Bridge
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    Interct E-Transfer Online Administration System
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    API Support Team
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    Public Search Engines
                  </li>
                </ul>
          </CardContent>
          </Card>       
          
        </div>
        
      </section>

      {/* Alert Disposition Section */}
      <section id="disposition" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Alert Disposition Actions</h2>
            <p className="text-lg text-slate-600">Process for closing alerts via InAct system</p>
          </div>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-600" />
                Closing Alerts via InAct
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Review Process:</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-semibold">1</div>
                      <p className="text-sm font-medium text-slate-900">Access Alert</p>
                      <p className="text-xs text-slate-600 mt-1">Access the alert in InAct system</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-semibold">2</div>
                      <p className="text-sm font-medium text-slate-900">Review Data</p>
                      <p className="text-xs text-slate-600 mt-1">Review all transaction data and scenarios</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-semibold">3</div>
                      <p className="text-sm font-medium text-slate-900">Determine</p>
                      <p className="text-xs text-slate-600 mt-1">Determine appropriate disposition</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-semibold">4</div>
                      <p className="text-sm font-medium text-slate-900">Justify</p>
                      <p className="text-xs text-slate-600 mt-1">Add justification or remarks if relevant</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-semibold">5</div>
                      <p className="text-sm font-medium text-slate-900">Close</p>
                      <p className="text-xs text-slate-600 mt-1">Close the Alert</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Disposition Options:</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="border-green-200 bg-green-50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-green-800 text-base flex items-center gap-2">
                          <CheckCircle className="h-4 w-4" />
                          Not Suspicious
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-green-700">
                        Use when the alert is clearly a false positive or shows an expected behaviour based on review
                      </CardContent>
                    </Card>
                    
                    <Card className="border-orange-200 bg-orange-50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-orange-800 text-base flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4" />
                          Escalate to Compliance
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-orange-700">
                        Use when suspicious activity is identified and requires further investigation
                      </CardContent>
                    </Card>
                    
                    <Card className="border-slate-200 bg-slate-50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-slate-800 text-base flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          Request for Information
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-slate-700">
                        Use to request clarification about transactions or customer details from the client
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">InAct</span>
              </div>
              <p className="text-slate-400">
                Transaction monitoring system for detecting potentially suspicious customer activity
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-slate-400">
                <li><button onClick={() => scrollToSection('purpose')} className="hover:text-white transition-colors">Purpose & Scope</button></li>
                <li><button onClick={() => scrollToSection('generation')} className="hover:text-white transition-colors">Alert Generation</button></li>
                <li><button onClick={() => scrollToSection('review')} className="hover:text-white transition-colors">Review Process</button></li>
                <li><button onClick={() => scrollToSection('disposition')} className="hover:text-white transition-colors">Alert Disposition</button></li>
              </ul>
            </div>
            {/* <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400">
                <li>Documentation</li>
                <li>Training Resources</li>
                <li>Compliance Team</li>
                <li>Technical Support</li>
              </ul>
            </div> */}
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Leonardo Moncada. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

