import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import TreatmentCard from "./TreatmentCard";
import { IoFemale, IoMale, IoMaleFemaleOutline } from "react-icons/io5";
import { treatment } from "../assets/static";

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
            <Button>Popular</Button>
          </NavLink>
          <NavLink to="/blog">
            <Button>All Treatments</Button>
          </NavLink>
          <NavLink to="/product">
            <Button> View Products</Button>
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
        <div className="cards flex flex-wrap mt-10 gap-3 items-center justify-center">
          <TreatmentCard
            title="Eretile Dysfunction"
            icon={<IoMale />}
            img={treatment[7]}
          />
          <TreatmentCard
            title="Urinary Tract Infection"
            icon={<IoMaleFemaleOutline />}
            img={treatment[3]}
          />
          <TreatmentCard
            title="Dysmenorrhea"
            icon={<IoFemale />}
            img={treatment[8]}
          />
          <TreatmentCard
            title="Oligospermia"
            icon={<IoFemale />}
            img={treatment[6]}
          />
          <TreatmentCard
            title="Weight Loss"
            icon={<IoMaleFemaleOutline />}
            img={treatment[5]}
          />
          <TreatmentCard
            title="Gastric Ulcer"
            icon={<IoMaleFemaleOutline />}
            img={treatment[4]}
          />
          <TreatmentCard
            title="Malaria"
            icon={<IoMaleFemaleOutline />}
            img={treatment[0]}
          />
          <TreatmentCard
            title="Alopecia"
            icon={<IoMaleFemaleOutline />}
            img={treatment[2]}
          />
        </div>
        <Link
          to="/blog"
          className="mt-5 text-center text-white hover:underline underline-offset-4 w-full bg-[#277c67] p-1 rounded-md mb-10"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default FeatureProduct;
