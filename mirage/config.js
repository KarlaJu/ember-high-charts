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
          "type": "IMPRECISE"
        },
        {
          "skillTest": "Gestión de Clase",
          "type": "LATENT"
        },
        {
          "skillTest": "Comunicación Intrapersonal",
          "type": "PRODUCING"
        },
        {
          "skillTest": "Comunicación Interpersonal",
          "type": "LATENT"
        },
        {
          "skillTest": "Orientación al alumno",
          "type": "PRODUCING"
        },
        {
          "skillTest": "Liderazgo",
          "type": "PRODUCING"
        },
        {
          "skillTest": "Vinculación laboral",
          "type": "LATENT"
        },
        {
          "skillTest": "Gestión tecnológica",
          "type": "LATENT"
        }
      ]
    };
  });
}
