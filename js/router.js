const pages={
  home:"sections/home.html",
  projects:"sections/projects.html",
  story:"sections/story.html",
  partner:"sections/partner.html",
  blog:"sections/blog.html",
  contact:"sections/contact.html",
  appointment:"sections/appointment.html"
};
async function router(){
  let hash=location.hash.slice(1)||"home";
  let [page,param]=hash.split("?");
  const html=await fetch(pages[page]||pages.home).then(r=>r.text());
  qs("#app").innerHTML=html;
  if(page==="projects") loadProjects();
  if(page==="appointment") initAppointment();
}
addEventListener("hashchange",router);
addEventListener("load",router);
