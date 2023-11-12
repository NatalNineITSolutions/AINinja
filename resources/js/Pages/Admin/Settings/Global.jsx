import { useState } from "react";
import Card from "@/Components/Card";
import Input from "@/Components/Input";
import Setting from "@/Components/Icons/Setting";
import { Head, useForm } from "@inertiajs/react";
import Breadcrumb from "@/Components/Breadcrumb";
import timeZoneData from "@/utils/data/time-zone";
import { Avatar, Button } from "@material-tailwind/react";
import InputDropdown from "@/Components/InputDropdown";
import UserCircle from "@/Components/Icons/UserCircle";
import Dashboard from "@/Layouts/Dashboard";

const Global = (props) => {
   const { name, email, logo, copyright, openai_key, aws_key, aws_secret } =
      props.app;
   const [imageUrl, setImageUrl] = useState(
      `/${logo}` === "/null" ? null : `/${logo}`
   );

   const { data, setData, post, errors, clearErrors } = useForm({
      app_name: name,
      app_email: email,
      app_logo: null,
      app_timezone: props.app.timezone,
      app_copyright: copyright,
      openai_key: openai_key,
      aws_key: aws_key,
      aws_secret: aws_secret,
   });

   const onHandleChange = (event) => {
      setData(event.target.name, event.target.value);
   };

   const submit = (e) => {
      e.preventDefault();
      clearErrors();
      post(route("settings.global-update"));
   };

   // time zone values
   const keys = Object.keys(timeZoneData);
   const values = Object.values(timeZoneData);
   const timezone = values.map((item, index) => ({
      key: item,
      value: keys[index],
   }));

   const handleImageChange = (e) => {
      const files = e.target.files;
      if (files && files[0]) {
         setData("app_logo", files[0]);
         setImageUrl(URL.createObjectURL(files[0]));
      }
   };

   return (
      <>
         <Head title="Global Settings" />
         <Breadcrumb Icon={Setting} title="Global Settings" />

         <Card className="max-w-[1000px] w-full mx-auto">
            <div className="px-7 pt-7 pb-4 border-b border-b-gray-200">
               <p className="text18 font-bold text-gray-900">
                  Setup Global Settings
               </p>
            </div>

            <form onSubmit={submit} className="p-7">
               <div className="grid grid-cols-1 gap-7">
                  <div className="flex flex-col md:flex-row">
                     <p className="max-w-[164px] w-full font-medium text-gray-500 mb-1">
                        App Logo
                     </p>
                     <div>
                        {imageUrl ? (
                           <Avatar
                              src={imageUrl}
                              alt="item-1"
                              size="xs"
                              variant="circular"
                              className="h-[100px] w-[100px]"
                           />
                        ) : (
                           <UserCircle className="h-[100px] w-[100px] text-blue-gray-500" />
                        )}
                        <div className="mt-1 flex items-center">
                           <label
                              for="formFileSm"
                              className="text12 font-medium text-gray-900 px-2.5 py-1.5 border border-gray-700 bg-gray-100 whitespace-nowrap"
                           >
                              Choose Photo
                           </label>
                           <input
                              hidden
                              id="formFileSm"
                              type="file"
                              onChange={handleImageChange}
                           />
                           <small className="ml-3 text-gray-500">
                              JPG, JPEG, PNG, SVG File, Maximum 2MB
                           </small>
                        </div>
                        {errors.app_logo && (
                           <p className="text-sm text-red-500 mt-1">
                              {errors.app_logo}
                           </p>
                        )}
                     </div>
                  </div>
                  <Input
                     name="app_name"
                     label="App Name"
                     value={data.app_name}
                     error={errors.app_name}
                     onChange={onHandleChange}
                     placeholder="Enter your app name"
                     fullWidth
                     flexLabel
                     required
                  />

                  <Input
                     name="app_email"
                     label="App Email Address"
                     value={data.app_email}
                     error={errors.app_email}
                     onChange={onHandleChange}
                     placeholder="Enter your app email address"
                     fullWidth
                     flexLabel
                     required
                  />

                  <InputDropdown
                     required
                     flexLabel
                     fullWidth
                     label="App Timezone"
                     error={errors.app_timezone}
                     defaultValue={props.app.timezone}
                     itemList={timezone}
                     onChange={(e) => setData("app_timezone", e.value)}
                  />

                  <Input
                     name="app_copyright"
                     label="App Copyright"
                     value={data.app_copyright}
                     error={errors.app_copyright}
                     onChange={onHandleChange}
                     placeholder="Enter the copy right text. (Show on footer)"
                     fullWidth
                     flexLabel
                     required
                  />

                  <Input
                     type="password"
                     name="openai_key"
                     label="Open AI API Key"
                     value={data.openai_key}
                     error={errors.openai_key}
                     onChange={onHandleChange}
                     placeholder="Enter your open ai api key"
                     fullWidth
                     flexLabel
                     required
                  />

                  <Input
                     name="aws_key"
                     type="password"
                     label="AWS Key"
                     value={data.aws_key}
                     error={errors.aws_key}
                     onChange={onHandleChange}
                     placeholder="Enter aws credential key"
                     fullWidth
                     flexLabel
                     required
                  />

                  <Input
                     type="password"
                     name="aws_secret"
                     label="AWS Secret"
                     value={data.aws_secret}
                     error={errors.aws_secret}
                     onChange={onHandleChange}
                     placeholder="Enter aws credential secret"
                     fullWidth
                     flexLabel
                     required
                  />
               </div>

               <div className="flex items-center mt-7 md:pl-[164px]">
                  <Button
                     type="submit"
                     variant="text"
                     color="white"
                     className={`bg-primary-500 hover:bg-primary-500 active:bg-primary-500 font-medium capitalize rounded-md text14`}
                  >
                     Save Changes
                  </Button>
               </div>
            </form>
         </Card>
      </>
   );
};

Global.layout = (page) => <Dashboard children={page} />;

export default Global;
