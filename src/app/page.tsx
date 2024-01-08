import Image from 'next/image'
import Nav from '@/components/Nav'
import { Button } from '@/components/ui/button'
export default function Home() {
  return (
    <main className="flex p-24 self-center">
        <Nav></Nav>
        <section className='py-24 flex flex-col gap-8 items-center text-center'>
            <h1 className='text-4xl font-bold'>Shadcn is too good</h1>
            <p className='font-primary'>Hand picked themes and components very easy to implement This site is only frontend</p>
            <div className='flex gap-6 py-6'>
              <Button variant={"secondary"}>Learn more</Button>
              <Button>Hello</Button>
            </div>
          </section>
    </main>
  )
}
