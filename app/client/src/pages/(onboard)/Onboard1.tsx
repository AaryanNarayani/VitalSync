import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setBasicData } from "../../redux/slice/OnboardSlice";
import { useNavigate } from "react-router-dom";

interface FormData {
  name: string;
  weight: number;
  height: number;
  age: number;
}

interface FormErrors {
  name?: string;
  weight?: string;
  height?: string;
  age?: string;
}

const Onboard1 = () => {
  const onboardState = useSelector((state: RootState) => state.onboardState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState<FormData>({
    name: "",
    weight: 0,
    height: 0,
    age: 0,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const numberPattern = /^[1-9]\d*$/;
  const namePattern = /^[A-Za-z\s]{2,}$/; 

  const validateField = (name: string, value: string): string | undefined => {
    switch(name) {
      case 'name':
        if (!value.trim()) return "Name is required";
        if (!namePattern.test(value)) return "Name should contain only letters and spaces";
        return undefined;
        
      case 'age':
        if (!value) return "Age is required";
        if (!numberPattern.test(value)) return "Age must be a positive number";
        if (parseInt(value) > 120) return "Please enter a valid age";
        return undefined;
        
      case 'weight':
        if (!value) return "Weight is required";
        if (!numberPattern.test(value)) return "Weight must be a positive number";
        if (parseInt(value) > 500) return "Please enter a valid weight";
        return undefined;
        
      case 'height':
        if (!value) return "Height is required";
        if (!numberPattern.test(value)) return "Height must be a positive number";
        if (parseInt(value) > 300) return "Please enter a valid height";
        return undefined;
        
      default:
        return undefined;
    }
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    

    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
    

    if (name === 'name') {
      setFormData({ ...formData, [name]: value });
    } else {

      if (!value || numberPattern.test(value)) {
        setFormData({ ...formData, [name]: value ? parseInt(value) : 0 });
      }
    }
  };

  const handleNext = () => {
    // Validate all fields
    const newErrors: FormErrors = {};
    
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value.toString());
      if (error) {
        newErrors[key as keyof FormErrors] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    dispatch(setBasicData(formData));
    navigate("/onboard/2");
  };

  return (
    <div className="bg-[--primary-background] w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="bg-[--secondary-background] h-fit w-[400px] border border-gray border-opacity-55 rounded-md flex flex-col shadow-lg gap-5 px-8 py-10">
        <div className="w-[90%] mx-auto flex flex-col justify-center items-center">
          <h1 className="text-[30px]">Hello There !!</h1>
          <p className="text-[--graytext] text-xs">Help us know you more !</p>
        </div>
        <div className="w-[80%] mt-2  mx-auto flex flex-col items-start">
          {errors && <span className="text-red-500 text-xs mt-1">{errors.name || errors.age || errors.height || errors.weight}</span>}
          <label className="text-[15px] font-light mt-1">Name</label>
          <input
            type="text"
            className="outline-none py-[8px] w-[100%] mx-auto mt-1 rounded-xl px-3 text-md border border-opacity-25"
            placeholder="Enter your name"
            value={formData.name}
            name="name"
            onChange={handleChange}
          />

          <label className="text-[15px] font-light mt-1">Age</label>
          <input
            type="number"
            className="outline-none py-[8px] w-[100%] mx-auto mt-1 rounded-xl px-3 text-md border border-opacity-25"
            placeholder="Enter your age"
            value={formData.age || ''}
            name="age"
            onChange={handleChange}
            min="1"
          />

          <label className="text-[15px] font-light mt-1">Height</label>
          <input
            type="number"
            className="outline-none py-[8px] w-[100%] mx-auto mt-1 rounded-xl px-3 text-md border border-opacity-25"
            placeholder="Enter your height"
            value={formData.height || ''}
            name="height"
            onChange={handleChange}
            min="1"
          />

          <label className="text-[15px] font-light mt-1">Weight</label>
          <input
            type="number"
            className="mb-3 outline-none py-[8px] w-[100%] mx-auto mt-1 rounded-xl px-3 text-md border border-opacity-25"
            placeholder="Enter your Weight"
            value={formData.weight || ''}
            name="weight"
            onChange={handleChange}
            min="1"
          />

          <button 
            className="py-2 w-[100%] mx-auto rounded-xl px-2 text-lg bg-gradient-to-r from-[--secondary] to-[--primary] text-black transition duration-300 ease-in-out hover:brightness-90 text-[10px] font-normal"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboard1;