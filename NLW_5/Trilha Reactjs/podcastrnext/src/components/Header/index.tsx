import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";
import styles from "./styles.module.scss";
import React, { useState } from "react";
import Switch from "react-switch";
import Link from "next/link";

export function Header() {
  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
    if (nextChecked) {
      document.getElementById("podcastr").className = "dark-mode";
    } else {
      document.getElementById("podcastr").className = "";
    }
  };
  const currentDate = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBR,
  });
  return (
    <header className={styles.headerContainer}>
      <Link href={"/"}>
        <img src="/logo.svg" alt="Podcastr" />
      </Link>
      <p>O melhor para você ouvir, sempre</p>

      <span>{currentDate}</span>
      <div className={styles.darkModeSwitch}>
        <span>Dark Mode</span>
        <Switch
          onChange={handleChange}
          checked={checked}
          height={16}
          width={40}
          handleDiameter={10}
          onColor={"#8257E5"}
          activeBoxShadow={'0 0 2px 3px #04d361'}
          className={styles.switch}
        ></Switch>
      </div>
    </header>
  );
}
