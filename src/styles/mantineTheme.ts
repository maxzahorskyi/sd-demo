import { MantineTheme } from "@mantine/core";

const mantineTheme: Partial<MantineTheme> = {
  components: {
    Button: {
      styles: {
        root: {
          "&:hover": {
            backgroundColor: "black"
          }
        }
      }
    },
    Input: {
      styles: (theme) => ({
        input: {
          borderColor: "rgb(163 163 163)",
          "&:focus": {
            borderColor: "grey"
          }
        }
      })
    },
    Table: {
      styles: {
        root: {
          "tbody tr td ": {
            borderBottom: "none",
            padding: "10px 12px"
          }
        }
      }
    }
  }
};

export default mantineTheme;
