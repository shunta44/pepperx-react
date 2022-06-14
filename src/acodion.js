import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SimpleAccordion() {
  const [expanded, setExpanded] = React.useState(true);

  const click = () => {
    setExpanded(false);
  };
  
  const handleChange = (event, newValue) => {
    setExpanded(newValue);
    console.log(newValue)

  };

  // Accordionはexpandedで表示・非表示を管理しているので、別の場所で使うためにstateを作る
  // Accordionの中のonChangeは第二引数でexpandedの状態を表す
  // (material uiのサイトのAccordion APIにその説明が載っている)
  // onChangeで呼び出した関数
  // handleChangeのstate更新の処理で第二引数のnewValueをセットすることでexpandedでアクセスすることができる。


  return (
    <div>
      <Accordion expanded={expanded} onChange={handleChange}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>アコーディオン</Typography>
        </AccordionDetails>
      </Accordion>
      <br />
      <br />
      <button onClick={click}>閉じる</button>

    </div>
  );
}