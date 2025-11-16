import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { db } from '@/lib/firebase'
import { collection,addDoc,serverTimestamp } from 'firebase/firestore'
import toast from 'react-hot-toast';

const NoteForm = () => {
  const [note,setNote] = useState("")
  const [loading,setLoading] = useState(false)
  const handleSubmit = async () => {
    if(!note.trim()) {
      toast.error("Please fill the note...!!")
    }else{
      setLoading(true);
    await addDoc(collection(db, "notes"), {
      content:note,
      createdAt:serverTimestamp()
    })
    setNote("")
    setLoading(false);
    toast.success("Note added..!")
    }    
  }
  return (
    <div className='space-y-2'>
      <Input
        placeholder='Type your Note...'
        value = {note}
        onChange={(e) => setNote(e.target.value)}
        maxLength={50}
      />
      <div className='flex justify-between text-xs text-gray-500'>
        <span>{note.length}/50</span>
      </div>
      <Button className='w-full mt-3' onClick={handleSubmit} disabled={loading}>
          {loading ? "Saving.." : "Save Note"}
      </Button>
    </div>
  )
}
export default NoteForm
