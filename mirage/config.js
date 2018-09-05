export default function() {
 this.get('v1/api/teachers', () => {
    return {
      "id": 180,
      "username": "cf.ruiz",
      "enrollment": "M00227967",
      "author": "ia.quiroga",
      "status": "Contestada",
      "campusCode": "LEO",
      "assignedEvaluation": "Evaluación Docencia I DIC 2017",
      "skillTests": [
        {
          "skillTest": "Cultura EBC",
          "type": "Imprecisa"
        },
        {
          "skillTest": "Gestión de Clase",
          "type": "Latente"
        },
        {
          "skillTest": "Comunicación Intrapersonal",
          "type": "Produciendo"
        },
        {
          "skillTest": "Comunicación Interpersonal",
          "type": "Gestándose"
        },
        {
          "skillTest": "Orientación al alumno",
          "type": "Produciendo"
        },
        {
          "skillTest": "Liderazgo",
          "type": "Produciendo"
        },
        {
          "skillTest": "Vinculación laboral",
          "type": "Latente"
        },
        {
          "skillTest": "Gestión tecnológica",
          "type": "Latente"
        }
      ]
    };
  });
}
