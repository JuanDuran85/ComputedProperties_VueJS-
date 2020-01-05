Vue.component('computed-properties-get-set', {
    template: `
        <div>
            <h1>Computed Properties desde Componente</h1>
            <p>Llamado directo con computed: {{fullName}}</p>
            <p>La edad del usuario es: {{edadUsuario}} años</p>
        </div>
    `,
    data() {
        return {
            usuario: {
                nombre: 'Juan',
                apellido: 'Duran',
                year: '1985'
            }
        }
    },
    computed: {
        fullName(){
            return `${this.usuario.nombre} ${this.usuario.apellido}`
        },
        edadUsuario(){
            let fecha = new Date().getFullYear();
            let cumple = fecha - this.usuario.year;
            return cumple
        }
    },
})