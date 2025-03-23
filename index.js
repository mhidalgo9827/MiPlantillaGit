function isMobile() {
    return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile/i.test(
      navigator.userAgent
    );
  }

  function openGmail() {
    const email = "mhidalgo9827@gmail.com";
    const subject = "Contacto WEB";

    if (isMobile()) {
      // Intenta abrir la app Gmail usando mailto
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(
        subject
      )}`;
    } else {
      // Abre el editor web de Gmail en navegador
      window.open(
        `https://mail.google.com/mail/?view=cm&to=${email}&su=${encodeURIComponent(
          subject
        )}`,
        "_blank"
      );
    }
  }