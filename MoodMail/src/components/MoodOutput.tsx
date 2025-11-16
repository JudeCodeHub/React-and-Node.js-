//import React from 'react'
import {Input} from  "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {Textarea} from "@/components/ui/textarea"

type props = {
  subject:string,
  footer:string,
  onReset : () => void
}

const MoodOutput = ({subject,footer,onReset} : props) => {
  return (
    <div className="space-y-4">
        <div>
         <label className="black font-medium">Subject:</label>
         <Input value={subject} readOnly/>
        </div>

        <div>
         <label className="black font-medium">Footer Signature:</label>
         <Textarea value={footer} readOnly/>
        </div>

        <Button variant="destructive" className="w-full" onClick={onReset}>
            Reset
        </Button>

    </div>

    



  )
}

export default MoodOutput
