const socialData = [
  {
    id: 1,
    cls: "social-twit",
    href: "https://twitter.com",
    iconClass: "fa-brands fa-twitter",
    alt: "Twitter",
  },
  {
    id: 2,
    cls: "social-lnkd",
    href: "https://linkedin.com",
    iconClass: "fa-brands fa-linkedin",
    alt: "LinkedIn",
  },
  {
    id: 3,
    cls: "social-git",
    href: "https://github.com",
    iconClass: "fa-brands fa-github",
    alt: "GitHub",
  },
  {
    id: 4,
    cls: "social-email",
    href: "mailto:contact@intellipath.ai",
    iconClass: "fa-solid fa-envelope",
    alt: "Email",
  },
];

export default function FooterSocial() {
  return (
    <>
      {socialData.map((item) => (
        <a key={item.id} className={item.cls} href={item.href} target="_blank">
          <i className={item.iconClass}></i>
        </a>
      ))}
    </>
  );
}
