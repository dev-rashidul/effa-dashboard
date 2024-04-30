import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

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
            className="border-[#D0D5DD placeholder:text-grey"
            rows="8"
            placeholder="Enter Requirements ..."
          />
        </div>
      </div>
    </>
  );
};

export default CreateScholarship;
