import { useState } from "react";
import Card from "@/Components/Card";
import Input from "@/Components/Input";
import React, { useEffect } from "react";
import Code from "@/Components/Icons/Code";
import Spinner from "@/Components/Spinner";
import TextArea from "@/Components/TextArea";
import Breadcrumb from "@/Components/Breadcrumb";
import { Head, useForm } from "@inertiajs/react";
import { Button } from "@material-tailwind/react";
import InputDropdown from "@/Components/InputDropdown";
import { format, isToday, parseISO } from "date-fns";
import supportedLanguages from "@/utils/data/text-to-speech";
import Audio from "@/Components/Icons/Audio";
import Dashboard from "@/Layouts/Dashboard";

const TextToSpeech = (props) => {
   const { auth, user, speeches, todaysSpeeches } = props;
   const [voices, setVoices] = useState(null);
   const [language, setLanguage] = useState(null);

   const { data, setData, post, processing, errors, clearErrors } = useForm({
      title: "",
      description: "",
      language: "en-US",
      voice: "Ivy",
   });

   const onHandleChange = (event) => {
      setData(event.target.name, event.target.value);
   };

   const submit = async (e) => {
      e.preventDefault();
      clearErrors();
      post(route("text-to-speech-save"));
   };

   useEffect(() => {
      if (language) {
         const { value, voices } = language;
         setData({ ...data, language: value, voice: voices[0].value });
         setVoices(voices);
         setLanguage(null);
      }
   }, [language]);

   const groupedData = speeches.reduce((result, element) => {
      const date = format(parseISO(element.created_at), "yyyy-MM-dd");
      if (!result[date]) {
         result[date] = [];
      }
      result[date].push(element);
      return result;
   }, {});

   const grouped = [];
   Object.keys(groupedData).forEach((key) => {
      const item = { generation: key, audios: groupedData[key] };
      grouped.push(item);
   });

   let textLimit = null;
   if (user.role === "admin") {
      textLimit = false;
   } else {
      if (user.subscription_plan.text_character_length === "Unlimited") {
         textLimit = false;
      } else {
         textLimit = user.subscription_plan.text_character_length;
      }
   }

   return (
      <>
         <Head title="Text ot speech" />
         {auth.user.role === "admin" ? (
            <Breadcrumb Icon={Audio} title="Text ot speech" />
         ) : (
            <Breadcrumb
               Icon={Audio}
               title="Text ot speech"
               totalCount={todaysSpeeches || 0}
               maxLimit={auth.user.subscription_plan.text_to_speech_generation}
            />
         )}

         <div className="grid grid-cols-12 gap-7">
            <div className="col-span-12 lg:col-span-4">
               <Card>
                  <div className="p-5 border-b border-gray-100 flex items-center">
                     <Audio className="w-5 h-5 text-gray-400 mr-2" />
                     <p className="text18 text-gray-600">Text To Speech</p>
                  </div>
                  <form onSubmit={submit} className="p-5">
                     <div>
                        <TextArea
                           rows={8}
                           name="description"
                           label="Description"
                           value={data.description}
                           error={errors.description}
                           onChange={onHandleChange}
                           placeholder="e.g. Create a random string generator in JavaScript..."
                           maxLength={textLimit}
                           className="min-h-0"
                           required
                        />
                     </div>
                     <div className="mt-5">
                        <Input
                           name="title"
                           label="Title"
                           value={data.title}
                           error={errors.title}
                           onChange={onHandleChange}
                           placeholder="New Code"
                           maxLength={50}
                           required
                        />
                     </div>
                     <div className="mt-5">
                        <InputDropdown
                           fullWidth
                           label="Tone of Voice"
                           defaultValue={data.language}
                           itemList={supportedLanguages}
                           onChange={(e) => setLanguage(e)}
                        />
                     </div>

                     {voices && (
                        <div className="mt-5">
                           <InputDropdown
                              fullWidth
                              label="Tone of Voice"
                              defaultValue={data.voice}
                              itemList={voices}
                              onChange={(e) => setData("voice", e.value)}
                           />
                        </div>
                     )}

                     <Button
                        type="submit"
                        className="capitalize bg-primary-500 text-white text-sm px-5 mt-10 py-0 h-10"
                        color="white"
                        fullWidth
                     >
                        {processing ? (
                           <Spinner className="text-white !w-6 !h-6 !border-2" />
                        ) : (
                           <span>Submit</span>
                        )}
                     </Button>
                  </form>
               </Card>
            </div>

            <div className="col-span-12 lg:col-span-8 h-[628px]">
               <Card className="h-full p-5">
                  {grouped.length > 0 &&
                     grouped.map((item, index) => (
                        <div key={index} className="mb-6">
                           <div className="flex items-center mb-1">
                              <p className="text-lg font-bold text-gray-900">
                                 {isToday(parseISO(item.generation))
                                    ? "Today"
                                    : item.generation}
                              </p>
                              <p className="ml-1">{item.audios.length} of 6</p>
                           </div>
                           {item.audios.map((content) => (
                              <audio
                                 key={content.id}
                                 className="w-full h-12 mt-4"
                                 src={content.audio}
                                 preload="auto"
                                 controls
                              ></audio>
                           ))}
                        </div>
                     ))}
               </Card>
            </div>
         </div>
      </>
   );
};

TextToSpeech.layout = (page) => <Dashboard children={page} />;

export default TextToSpeech;
