import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
    } from "../../components/ui/accordion"
    import { Swiper, SwiperSlide } from 'swiper/react';
    import { Navigation } from "swiper/modules";
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    
    const AccordionSection = () => {
    return (
    <div className="relative mb-[150px] mt-10">
        <div className='flex flex-col lg:flex-row justify-between items-center w-full px-2 md:px-4 lg:px-8 xl:px-0 lg:max-w-7xl mx-auto space-x-0 lg:space-x-3'>
            {/* Content */}
            <div className='w-full px-4 lg:w-1/2 pt-10'>
                <div className="flex-1 space-y-4 sm:space-y-6">
                    <p className="text-[#253F8F] font-semibold">Enigma Camp</p>
                    <h2 className="text-4xl sm:text-5xl font-semibold leading-tight">Bangun Kepercayaan dan Berikan Solusi</h2>
                    <p className="text-lg font-light">Enigma Camp (PT Enigma Cipta Humanika) mengkhususkan diri dalam bisnis IT Bootcamp dan IT Talent Management, dan resmi didirikan pada 19 Agustus 2019. Enigma Camp didorong oleh pengalaman yang membangun insinyur perangkat lunak untuk mendukung bisnis klien kami.</p>
                </div>
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
            {/* Video */}
            <div className="w-full lg:w-1/2 pt-10 lg:pt-40">
                <div className="swiper-container">
                    <Swiper
                        className="has-ratio rounded-2xl shadow-lg w-full h-[240px] sm:h-[360px] md:w-[640px] lg:w-[500px] lg:h-[280px] xl:h-[360px] xl:w-[640px]"
                        modules={[Navigation]}
                        navigation={{hideOnClick: true}}
                    >
                        <SwiperSlide>
                            <figure width='100%' height='100%'>
                                <img src="https://awsimages.detik.net.id/community/media/visual/2024/01/31/enigma-camp-hadirkan-gebrakan-baru-di-bidang-teknologi-2_169.jpeg?w=1200" style={{ width: '100%', height: '100%' }} loading="lazy"></img>
                            </figure>
                        </SwiperSlide>
                        <SwiperSlide>
                            <figure width='100%' height='100%'>
                                <img src="https://awsimages.detik.net.id/community/media/visual/2024/01/31/enigma-camp-hadirkan-gebrakan-baru-di-bidang-teknologi-2_169.jpeg?w=1200" style={{ width: '100%', height: '100%' }} loading="lazy"></img>
                            </figure>
                        </SwiperSlide>
                        <SwiperSlide>
                            <figure width='100%' height='100%'>
                                <img src="https://awsimages.detik.net.id/community/media/visual/2024/01/31/enigma-camp-hadirkan-gebrakan-baru-di-bidang-teknologi-2_169.jpeg?w=1200" style={{ width: '100%', height: '100%' }} loading="lazy"></img>
                            </figure>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    </div>
    )
    }
    
    export default AccordionSection