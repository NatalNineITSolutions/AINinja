export const formats = [
   "font",
   "size",
   "bold",
   "italic",
   "underline",
   "strike",
   "color",
   "background",
   "script",
   "header",
   "blockquote",
   "code-block",
   "indent",
   "list",
   "direction",
   "align",
   "link",
   "image",
   "video",
   "formula",
];

export function getAudioLength(file) {
   return new Promise((resolve, reject) => {
      const audio = new Audio();
      audio.addEventListener("loadedmetadata", () => {
         const duration = audio.duration;
         resolve(duration);
      });
      audio.addEventListener("error", (error) => {
         reject(error);
      });
      audio.src = URL.createObjectURL(file);
   });
}
