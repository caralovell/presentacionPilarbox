import HeroSection from "@/components/HeroSection";
import DigitalSignageSection from "@/components/DigitalSignageSection";
import SmartSignageSection from "@/components/SmartSignageSection";
import WayfindingSection from "@/components/WayfindingSection";
import IoTSection from "@/components/IoTSection";
import AiAgentSection from "@/components/AiAgentSection";
import ImmersiveSection from "@/components/ImmersiveSection";
import BudgetSection from "@/components/BudgetSection";
import FooterSection from "@/components/FooterSection";
import SectionDivider from "@/components/SectionDivider";

const Index = () => (
  <div className="min-h-screen">
    <HeroSection />
    <SectionDivider />
    <DigitalSignageSection />
    <SectionDivider />
    <SmartSignageSection />
    <SectionDivider />
    <WayfindingSection />
    <SectionDivider />
    <IoTSection />
    <SectionDivider />
    <AiAgentSection />
    <SectionDivider />
    <ImmersiveSection />
    <BudgetSection />
    <FooterSection />
  </div>
);

export default Index;
