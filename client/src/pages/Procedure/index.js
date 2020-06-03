import React from "react";
import ProcedureFolder from "../../components/ProcedureFolder";
import ProgressCard from "../../components/ProgressCard";
import RuleCard from "../../components/RuleCard";

export default function Procedures() {
  return (
    <div>
      <ProcedureFolder
        id="1"
        number="12345678901234567890"
        cpf="053.332.081-07"
      />
      <ProgressCard
        date="01/02/2020"
        hour="08:30"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ornare leo. Praesent aliquet dignissim laoreet. Sed finibus lobortis vulputate. Duis vehicula ipsum at egestas rutr Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ornare leo. Praesent aliquet dignissim laoreet. Sed finibus lobortis vulputate. Duis vehicula ipsum at egestas rutr"
      />
      <RuleCard
        from="Audiência conciliação 
designada - 01/02/2019
08:30"
        to="A audiência de conciliação,
forma amigável de resolver
um processo, foi marcada.
Ela será realizada no dia
01/02/19 às 08:30, no local
indicado."
      />
    </div>
  );
}
