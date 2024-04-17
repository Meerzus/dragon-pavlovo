import '@/components/global.sass'

import './DragonsDungeonPage.sass'

import Header from "@/components/Header/Header";
import FirstSection from "@/components/DragonsDungeonComponents/FirstSection/FirstSection";
import SecondSection from "@/components/DragonsDungeonComponents/SecondSection/SecondSection";
import LeadForm from "@/components/LeadForm/LeadForm";
import ThirdSection from "@/components/DragonsDungeonComponents/ThirdSection/ThirdSection";


export default async function Home() {
  return (
      <main id={'dragonsDungeonPage'}>
          <Header/>

          <FirstSection/>

          <SecondSection/>

          <ThirdSection/>

          <LeadForm/>
      </main>
  );
}
