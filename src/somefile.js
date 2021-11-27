console.log("hello from somefile.js");
/* when the import style line below is commented, webpack won't create the css file in /dist because
no css file is being seen. If you uncomment the line, it will generate a css file because a css file is being used inside
a file that is being watched. (see entry object in webpack file) */
import "./style.css";
