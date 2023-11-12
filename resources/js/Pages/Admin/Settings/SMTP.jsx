import Card from "@/Components/Card";
import Input from "@/Components/Input";
import { Head, useForm } from "@inertiajs/react";
import Breadcrumb from "@/Components/Breadcrumb";
import Setting from "@/Components/Icons/Setting";
import { Button } from "@material-tailwind/react";
import InputDropdown from "@/Components/InputDropdown";
import Dashboard from "@/Layouts/Dashboard";

const SMTP = (props) => {
   const {
      host,
      port,
      username,
      password,
      sender_email,
      sender_name,
      encryption,
   } = props.smtp;

   const { data, setData, put, processing, errors, clearErrors } = useForm({
      smtp_host: host,
      smtp_port: port,
      smtp_encryption: encryption,
      smtp_username: username,
      smtp_password: password,
      mail_from_address: sender_email,
      mail_from_name: sender_name,
   });

   const onHandleChange = (event) => {
      setData(event.target.name, event.target.value);
   };

   const submit = (e) => {
      e.preventDefault();
      clearErrors();
      put(route("settings.smtp-update"));
   };

   return (
      <>
         <Head title="SMTP Settings" />
         <Breadcrumb Icon={Setting} title="SMTP Settings" />

         <Card className="max-w-[1000px] w-full mx-auto">
            <div className="px-7 pt-7 pb-4 border-b border-b-gray-200">
               <p className="text18 font-bold text-gray-900">
                  Setup SMTP Settings
               </p>
            </div>

            <form onSubmit={submit} className="p-7">
               <div className="grid grid-cols-1 gap-7">
                  <Input
                     type="password"
                     name="smtp_host"
                     label="SMTP Host"
                     value={data.smtp_host}
                     error={errors.smtp_host}
                     onChange={onHandleChange}
                     placeholder="Your smtp host"
                     fullWidth
                     flexLabel
                     required
                  />
                  <Input
                     type="number"
                     name="smtp_port"
                     label="SMTP Port"
                     value={data.smtp_port}
                     error={errors.smtp_port}
                     onChange={onHandleChange}
                     placeholder="Your smtp port"
                     fullWidth
                     flexLabel
                     required
                  />

                  <Input
                     type="password"
                     name="smtp_username"
                     label="SMTP Username"
                     value={data.smtp_username}
                     error={errors.smtp_username}
                     onChange={onHandleChange}
                     placeholder="Your smtp username"
                     fullWidth
                     flexLabel
                     required
                  />

                  <Input
                     type="password"
                     name="smtp_password"
                     label="SMTP Password"
                     value={data.smtp_password}
                     error={errors.smtp_password}
                     onChange={onHandleChange}
                     placeholder="Your smtp password"
                     fullWidth
                     flexLabel
                     required
                  />

                  <Input
                     name="mail_from_address"
                     label="Sender Email Address"
                     value={data.mail_from_address}
                     error={errors.mail_from_address}
                     onChange={onHandleChange}
                     placeholder="Sender email address"
                     fullWidth
                     flexLabel
                     required
                  />

                  <Input
                     name="mail_from_name"
                     label="Sender Name"
                     value={data.mail_from_name}
                     error={errors.mail_from_name}
                     onChange={onHandleChange}
                     placeholder="Email seder name"
                     fullWidth
                     flexLabel
                     required
                  />

                  <InputDropdown
                     required
                     flexLabel
                     fullWidth
                     label="SMTP Encryption"
                     error={errors.smtp_encryption}
                     defaultValue={props.smtp.encryption}
                     itemList={[
                        { key: "TLS", value: "tls" },
                        { key: "SSL", value: "ssl" },
                     ]}
                     onChange={(e) => setData("smtp_encryption", e.value)}
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

SMTP.layout = (page) => <Dashboard children={page} />;

export default SMTP;
