import { NavLink } from "react-router-dom";
import Button from "./Button";
import { FaHandPointUp } from "react-icons/fa";
import TreatmentCard from "./TreatmentCard";

const FeatureProduct = () => {
  return (
    <div className="">
      <h2 className="text-center text-[1.5rem] md:text-[2.5rem] text-[#277c6f] font-bold">
        Find Your Treatment
      </h2>
      <p className="text-center hidden lg:block">
        Pharmakart offers a wide range of treatments through our free online
        prescription service. The service is safe, discreet and convenient and
        all medicines are dispensed from our central London based registered
        pharmacy.
      </p>
      <div className="flex flex-col mt-5">
        <div className="categories flex flex-wrap justify-between gap-2">
          <NavLink to="/">
            <Button>All Treatments</Button>
          </NavLink>

          <NavLink to="/popular">
            <Button>Popular</Button>
          </NavLink>
          <NavLink to="/men">
            <Button>Men's</Button>
          </NavLink>
          <NavLink to="/women">
            <Button>Women</Button>
          </NavLink>
          <NavLink to="/respiratory">
            <Button>Respiratory</Button>
          </NavLink>
          <NavLink to="/sexual">
            <Button>Sexual</Button>
          </NavLink>
          <NavLink to="/others">
            <Button>Others</Button>
          </NavLink>
        </div>
        <div className="cards flex flex-wrap mt-10 gap-3 items-center">
          <TreatmentCard title="Eretile Dysfunction" />
          <TreatmentCard title="Urinary Tract Infection" />
          <TreatmentCard title="Dysmenorrhea" />
          <TreatmentCard title="Oligospermia" />
          <TreatmentCard title="Weight Loss" />
          <TreatmentCard title="Gastric Ulcer" />
          <TreatmentCard title="Malaria" />
          <TreatmentCard title="Alopecia" />
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
