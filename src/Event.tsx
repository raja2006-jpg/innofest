
import { useState, createContext, useContext, useEffect } from 'react'
import { ChevronDown, ChevronUp, Phone, Mail, Instagram, MessageCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { event, Event } from './config/events'


const ThemeContext = createContext<{theme: string; toggleTheme: () => void}>({
  theme: 'light',
  toggleTheme: () => {},
})

export default function EventPage() {
  const [theme, setTheme] = useState('light')
  const [eventType, setEventType] = useState('all')

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const filteredEvents = event.filter(event => 
    eventType === 'all' ? true : event.type === eventType
  )

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
        
        <main className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Select onValueChange={(value) => setEventType(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter events" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Events</SelectItem>
                <SelectItem value="technical">Technical</SelectItem>
                <SelectItem value="non-technical">Non-Technical</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event : Event) => (
              <EventCard key={event.id} event={event } />
            ))}
          </div>
        </main>

        <footer className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'} py-6 px-4`}>
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
              <p className="flex  font-semibold items-center"><Phone className="mr-2" />+91 7092351820 | +91 9342423914</p>
              <a href="mailto:innofest24@gmail.com">
                <p className="flex md:px-10  font-semibold items-center"><Mail className="mr-2" /> innofest26@gmail.com</p>
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/cyberockz_?igsh=eTZtY3drdzk1ZWc3" target="_blank" rel="noopener noreferrer" className="text-primary">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://chat.whatsapp.com/CgG05iPw0pB5cRn7RZBI16" target="_blank" rel="noopener noreferrer" className="text-primary">
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>
          {/* <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 InnoFest. All rights reserved.</p> */}
        
        </footer>
      </div>
    </ThemeContext.Provider>
  )
}

function EventCard({ event }: { event: Event }) {
  const [showRules, setShowRules] = useState(false)
  const { theme } = useContext(ThemeContext)

  return (
    <Card className={`overflow-hidden ${theme === 'dark' ? 'bg-gray-900 text-white' : ''}`}>
      <CardHeader className="p-0">
        <img src={event.image} alt={event.name} className="w-full h-48 object-cover" />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl font-bold">{event.name}</CardTitle>
        <div className="mt-1 mb-2">
          <span className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ${
            event.type === 'technical' ? 'bg-blue-200 text-blue-800' : 'bg-green-200 text-green-800'
          }`}>
            {event.type}
          </span>
        </div>
        <CardDescription className={theme === 'dark' ? 'text-gray-300' : ''}>{event.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex flex-col items-start p-4 pt-0">
        <Button
          variant="ghost"
          className="p-0 h-auto font-semibold"
          onClick={() => setShowRules(!showRules)}
        >
          {showRules ? (
            <>
              <ChevronUp className="mr-2 h-4 w-4" />
              Hide Rules
            </>
          ) : (
            <>
              <ChevronDown className="mr-2 h-4 w-4" />
              Show Rules
            </>
            
          )}
        </Button>
        
        {showRules && (
          <ul className="list-disc list-inside mt-2 text-sm">
            {event.rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        )}
        <a className="mt-4 w-full" href={event.formURL}>
        <Button className="mt-4 w-full" onClick={() => window.location.href = "URl"}>Register</Button>
        </a>
        
      </CardFooter>
    </Card>
  )
}