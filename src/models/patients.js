class Patient {
    constructor(id, nombre_completo, fecha_nacimiento, lugar_nacimiento, edad, nombre_madre, nombre_padre, sexo, procedencia, estado_civil, religion, sintoma_principal, historia_enfermedad_actual, funciones_organicas_generales, revision_por_organos_aparatos_sistemas, antecedentes_prenatales_postnatales, datos_del_nacimiento, antecedentes_personales_patologicos, antecedentes_personales_no_patologicos, vacunacion, escolaridad, medio_ambiente) {
        this.id = id;
        this.nombre_completo = nombre_completo;
        this.fecha_nacimiento = fecha_nacimiento;
        this.lugar_nacimiento = lugar_nacimiento;
        this.edad = edad;
        this.nombre_madre = nombre_madre;
        this.nombre_padre = nombre_padre;
        this.sexo = sexo;
        this.procedencia = procedencia;
        this.estado_civil = estado_civil;
        this.religion = religion;
        this.sintoma_principal = sintoma_principal;
        this.historia_enfermedad_actual = historia_enfermedad_actual;
        this.funciones_organicas_generales = funciones_organicas_generales;
        this.revision_por_organos_aparatos_sistemas = revision_por_organos_aparatos_sistemas;
        this.antecedentes_prenatales_postnatales = antecedentes_prenatales_postnatales;
        this.datos_del_nacimiento = datos_del_nacimiento;
        this.antecedentes_personales_patologicos = antecedentes_personales_patologicos;
        this.antecedentes_personales_no_patologicos = antecedentes_personales_no_patologicos;
        this.vacunacion = vacunacion;
        this.escolaridad = escolaridad;
        this.medio_ambiente = medio_ambiente;
    }
}

module.exports = Patient;