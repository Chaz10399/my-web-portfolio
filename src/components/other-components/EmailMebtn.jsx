import Button from "./Button";
export default function EmailMeBtn() {
  return (
    <Button
      onClick={() =>
        window.open(
          "https://mail.google.com/mail/?view=cm&fs=1&to=charliesobrio10399@gmail.com",
          "_blank"
        )
      }
    >
      Email Me
    </Button>
  );
}
