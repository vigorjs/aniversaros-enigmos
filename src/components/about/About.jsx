import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
  } from "../../components/ui/accordion"
// import { Button } from "../ui/button"

function About() {
  return (
    <div>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 my-10 sm:my-20 flex flex-col lg:flex-row justify-center gap-16">
            <div className="flex-1 space-y-4 sm:space-y-6">
                <p className="text-[#4A7D6D] font-semibold">Markashima Studio</p>
                <h2 className="text-4xl sm:text-5xl font-semibold leading-tight">Were a Team of Creatives Ready to Capture Your Moment</h2>
                <p className="font-light">Veri ubique cu eam, vero dicta ridens ei quo, ex putent menandri accommodare sed. Suscipit lobortis prodesset ut eam. Sale dicta dolore pri et, an aliquam.</p>
                <a className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-bold bg-[#031273] text-white hover:bg-[#031273]/90 h-10 px-4 py-2" href="/about">Read More <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  className="lucide lucide-chevron-right w-5 h-5 ml-2"><path d="m9 18 6-6-6-6"></path></svg></a>
            </div>
            <div className="flex-1 flex items-center">
            <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <p className="sm:text-md text-slate-800"><span className="font-bold text-2xl text-[#253F8F]">R</span>espect</p>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-slate-500">Respect each other : Saling menghargai dan menghormati satu sama lain.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            <p className="text-md text-slate-800"><span className="font-bold text-2xl text-[#253F8F]">E</span>ffective & Efficient</p>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-slate-500">Effective & Efficient : Memaksimalkan proses bekerja untuk mendapatkan hasil yang baik.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            <p className="text-md text-slate-800"><span className="font-bold text-2xl text-[#253F8F]">A</span>gile Spirit</p>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-slate-500">Agile spirit : Mampu menyesuaikan diri atau beradaptasi dengan segala perubahan.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            <p className="text-md text-slate-800"><span className="font-bold text-2xl text-[#253F8F]">D</span>iscipline</p>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-slate-500">Discipline : Taat dan patuh pada aturan, termasuk yang berkaitan dengan diri sendiri</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            <p className="text-md text-slate-800"><span className="font-bold text-2xl text-[#253F8F]">Y</span>es I Can</p>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-slate-500">Yes I can : Memiliki pandangan positif dan optimis terhadap segala sesuatu</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    </div>
  )
}

export default About