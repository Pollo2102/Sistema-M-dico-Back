class Physical_Exam_Adult {
    constructor(paciente_id, fecha_examen, peso, talla, perimetro_cefalico, temperatura, presion_arterial, frecuencia_cardiaca, frecuencia_respiratoria, pulso, saturacion_oxigeno, cabeza, ojos, oidos, nariz, boca, cuello, torax, abdomen, genitales, extremidades, tacto_rectal_vaginal, piel_y_faneras, examen_neurologico, diagnostico_etario, diagnostico_nutricional, diagnostico_inmunologico, diagnostico_socioeconomico, diagnostico_patologico) {
        this.paciente_id = paciente_id;
        this.fecha_examen = fecha_examen;
        this.peso = peso;
        this.talla = talla;
        this.perimetro_cefalico = perimetro_cefalico;
        this.temperatura = temperatura;
        this.presion_arterial = presion_arterial;
        this.frecuencia_cardiaca = frecuencia_cardiaca;
        this.frecuencia_respiratoria = frecuencia_respiratoria;
        this.pulso = pulso;
        this.saturacion_oxigeno = saturacion_oxigeno;
        this.cabeza = cabeza;
        this.ojos = ojos;
        this.oidos = oidos;
        this.nariz = nariz;
        this.boca = boca;
        this.cuello = cuello;
        this.torax = torax;
        this.abdomen = abdomen;
        this.genitales = genitales;
        this.extremidades = extremidades;
        this.tacto_rectal_vaginal = tacto_rectal_vaginal;
        this.piel_y_faneras = piel_y_faneras;
        this.examen_neurologico = examen_neurologico;
        this.diagnostico_etario = diagnostico_etario;
        this.diagnostico_nutricional = diagnostico_nutricional;
        this.diagnostico_inmunologico = diagnostico_inmunologico;
        this.diagnostico_socioeconomico = diagnostico_socioeconomico;
        this.diagnostico_patologico = diagnostico_patologico;
    }
}

module.exports = Physical_Exam_Adult;