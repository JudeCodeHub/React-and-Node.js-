//import React from 'react'
import MoodInput from "@/components/MoodInput"
import MoodOutput from "@/components/MoodOutput";
import { useState } from "react"

const Home = () => {

  const [mood,setMood] = useState("");
  const [subject,setSubject] = useState("");
  const [footer,setFooter] = useState("");
  const [generated,setGenerated] = useState(false);

  const handleGenerate = () =>{
    const lowerMood = mood.toLowerCase();
    
    if(lowerMood.includes("happy")){
      setSubject("Feeling great today");
      setFooter("Stay awesome");
    }else if(lowerMood.includes("sad")){
      setSubject("Just another tough day");
      setFooter("Sending hugs");
    }else if(lowerMood.includes("angry")){
      setSubject("Feeling frustrated");
      setFooter("Take a deep breath");
    }else{
      setSubject("Just another day");
      setFooter("Have great day");
    }
    setGenerated(true);
  }

  const handleReset = () =>{
     setMood("");
     setSubject("");
     setFooter("");
     setGenerated(false);
  }



  return (
    <div className="max-w-xl mx-auto mt-20 p-6 rounded-lg shadow-sm bg-white space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Moodmail Generator</h2>

        {!generated ? (
               <MoodInput mood={mood} setMood={setMood}
                onGenerate={handleGenerate}
               disabled={generated}
              />
        ) : (
             <MoodOutput subject={subject}  footer={footer} onReset={handleReset}/>
        )}
    </div> 
  )
}

export default Home
