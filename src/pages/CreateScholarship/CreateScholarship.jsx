import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/search-icon.svg";

const CreateScholarship = () => {
  return (
    <>
      <div className="create__scholarships__form">
        <h4 className="text-2xl text-blackNormal font-medium">
          Create a Scholarship
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-8">
          <div className="w-full">
            <Label
              className="block text-base text-blackNormal pb-1"
              htmlFor="title"
            >
              Scholarship Title
            </Label>
            <Input
              className="border-[#D0D5DD] py-5 placeholder:text-grey"
              type="text"
              id="title"
              placeholder="Title"
            />
          </div>
          <div className="w-full select">
            <Label
              className="block text-base text-blackNormal pb-1"
              htmlFor="title"
            >
              Amount
            </Label>
            <Select>
              <SelectTrigger className="border-[#D0D5DD] py-5">
                <SelectValue
                  placeholder={<span className="dollar-sign">$</span>}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full">
            <Label
              className="block text-base text-blackNormal pb-1"
              htmlFor="date"
            >
              Scholarship Expiration
            </Label>
            <Input
              className="flex w-full justify-between border-[#D0D5DD] py-5 placeholder:text-grey"
              type="date"
              id="date"
            />
          </div>
        </div>
        <div className="w-full pt-4">
          <Label
            className="block text-base text-blackNormal pb-1"
            htmlFor="receipient__description"
          >
            Recipient Description
          </Label>
          <Textarea
            id="receipient__description"
            className="border-[#D0D5DD placeholder:text-grey"
            placeholder="Write Description ..."
          />
        </div>
        <div className="w-full pt-4">
          <Label
            className="block text-base text-blackNormal pb-1"
            htmlFor="scholarship__description"
          >
            Scholarship Description
          </Label>
          <Textarea
            id="scholarship__description"
            className="border-[#D0D5DD placeholder:text-grey"
            rows="8"
            placeholder="Overview ..."
          />
        </div>
        <div className="w-full pt-4">
          <Label
            className="block text-base text-blackNormal pb-1"
            htmlFor="requirements"
          >
            Requirements
          </Label>
          <Textarea
            id="requirements"
            className="border-[#D0D5DD] placeholder:text-grey"
            rows="8"
            placeholder="Enter Requirements ..."
          />
        </div>
        <div className="create__scholarship__form__bottom relative before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-[#D9D9D9] pl-8 mt-8">
          <div className="create__scholarship__form__card step-1">
            <h5 className="text-xl text-[#CC8626] font-medium">
              Limit applications from the following majors
            </h5>
            <div className="max-w-[293px] relative pt-2">
              <Input
                className="border-[#D0D5DD] py-5 placeholder:text-grey"
                type="text"
                id="title"
                placeholder="Search..."
              />
              <button className="absolute top-4 right-2" type="submit">
                <img src={searchIcon} alt="Search-icon" />
              </button>
            </div>
            <div className="flex">
              <div className="max-w-[293px] w-full border border-[#D0D5DD] rounded-md py-3 px-2 mt-[28px]">
                <RadioGroup defaultValue="comfortable">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default" id="r1" />
                    <Label
                      className="text-sm text-LightBlack font-normal"
                      htmlFor="r1"
                    >
                      Accounting
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="max-w-[293px] w-full border border-[#D0D5DD] rounded-md py-3 px-2 mt-[28px] ms-4">
                <RadioGroup defaultValue="comfortable">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default" id="r2" />
                    <Label
                      className="text-sm text-LightBlack font-normal"
                      htmlFor="r2"
                    >
                      Bookkeeping
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
          <div className="create__scholarship__form__card step-2 mt-8">
            <h5 className="text-xl text-blackNormal font-medium">
              Limit applications by demographics
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-6">
              <div className="w-full relative select zip-select">
                <div className="zip-cod absolute left-5 top-9">
                  <input
                    className="w-[90px] text-[12px] text-[#C0C0C0] bg-[#EDEEEF] text-center p-1 rounded-sm"
                    type="text"
                    placeholder="Enter Zip Code"
                  />
                </div>
                <div>
                  <Label className="block text-base text-blackNormal pb-1">
                    Gender
                  </Label>
                  <Select className="pl-32">
                    <SelectTrigger className="border-[#D0D5DD] py-5">
                      <SelectValue
                        placeholder={
                          <span className="dollar-sign">Select Gender</span>
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="w-full">
                <Label
                  className="block text-base text-blackNormal pb-1"
                  htmlFor="min-age"
                >
                  Minimum Age
                </Label>
                <Input
                  className="border-[#D0D5DD] py-5 placeholder:text-grey"
                  type="text"
                  id="min-age"
                  placeholder="Minimum Age"
                />
              </div>
              <div className="w-full select">
                <Label className="block text-base text-blackNormal pb-1">
                  Gender
                </Label>
                <Select>
                  <SelectTrigger className="border-[#D0D5DD] py-5">
                    <SelectValue
                      placeholder={
                        <span className="dollar-sign">Select Gender</span>
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full">
                <Label
                  className="block text-base text-blackNormal pb-1"
                  htmlFor="max-member"
                >
                  Maximum # of Scholarships
                </Label>
                <Input
                  className="border-[#D0D5DD] py-5 placeholder:text-grey"
                  type="text"
                  id="max-member"
                  placeholder="Maximum # of Scholarships"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4">
              <div className="w-full">
                <Label
                  className="block text-base text-blackNormal pb-1"
                  htmlFor="max-graduation"
                >
                  Maximum Months To Graduation
                </Label>
                <Input
                  className="border-[#D0D5DD] py-5 placeholder:text-grey"
                  type="text"
                  id="max-graduation"
                  placeholder="00"
                />
              </div>
              <div className="w-full">
                <Label
                  className="block text-base text-blackNormal pb-1"
                  htmlFor="min-gpa"
                >
                  Add Minimum GPA
                </Label>
                <Input
                  className="border-[#D0D5DD] py-5 placeholder:text-grey"
                  type="text"
                  id="min-gpa"
                  placeholder="00.000"
                />
              </div>
            </div>
            <div className="w-full pt-4">
              <Label
                className="block text-base text-blackNormal pb-1"
                htmlFor="ethnicity"
              >
                Ethnicity
              </Label>
              <Input
                className="border-[#D0D5DD] py-5 placeholder:text-grey"
                type="text"
                id="ethnicity"
                placeholder="Ethnicity"
              />
            </div>
          </div>
          <div className="create__scholarship__form__card mt-8">
            <h5 className="text-xl text-blackNormal font-medium">
              Limit applications from the following majors
            </h5>
            <div className="max-w-[293px] relative pt-2">
              <Input
                className="border-[#D0D5DD] py-5 placeholder:text-grey"
                type="text"
                id="title"
                placeholder="Search..."
              />
              <button className="absolute top-4 right-2" type="submit">
                <img src={searchIcon} alt="Search-icon" />
              </button>
            </div>
            <div className="md:flex">
              <div className="max-w-[293px] w-full border border-[#D0D5DD] rounded-md py-3 px-2 mt-[28px]">
                <RadioGroup defaultValue="comfortable">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default" id="r3" />
                    <Label
                      className="text-sm text-LightBlack font-normal"
                      htmlFor="r3"
                    >
                      Northwestern University
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="max-w-[293px] w-full border border-[#D0D5DD] rounded-md py-3 px-2 mt-[28px] md:ms-4">
                <RadioGroup defaultValue="comfortable">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default" id="r4" />
                    <Label
                      className="text-sm text-LightBlack font-normal"
                      htmlFor="r4"
                    >
                      Lake Forest College
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        </div>
        <div className="job__description pt-16">
          <h4 className="text-2xl text-blackNormal font-medium mb-5">Job Description</h4>
          <div className="md:flex">
          <div>
            <Link className="flex items-center justify-center text-white text-sm font-semibold bg-[#FFA830] py-3 px-4 rounded-md" to="/"> <span><Plus className="mr-2" /></span>Upload Job Description</Link>
          </div>
          <div className="md:pl-8 pt-4 md:pt-0">
            <Link className="flex items-center justify-center text-[#FFA830] text-sm font-semibold border border-[#FFA830] py-3 px-4 rounded-md" to="/"><span><Plus className="mr-2" /></span>Create Job Description</Link>
          </div>
          </div>
          <div className="back-btn pt-6">
            <Link className="text-[#FFA830] text-sm font-semibold bg-[#FFF2E0] py-3 px-4 rounded-lg" to="/">Back</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateScholarship;
