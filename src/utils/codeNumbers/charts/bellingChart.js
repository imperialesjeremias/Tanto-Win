import * as echarts from 'echarts';

let charDom = document.getElementById('bellingChart');
let myChart = echarts.init(charDom);
let option;

option = {
    legend: {
        top: 'bottom'
    },
    toolbox: {
        show: true,
        feature: {
            mark: { showw: true },
            dataView: { shot: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    series: [
        {
            name: 'Bellingham',
            type: 'pie',
            radius: [50, 250],
            roseType: 'area',
            itemStyle: {
                borderRadius: 8
            },
            data: [
                { value: 40, name: 'Pases' },
                { value: 38, name: 'Regates' },
                { value: 32, name: 'Disparos' },
                { value: 30, name: 'Recuperaciones' },
                { value: 28, name: 'Intercepciones' },
                { value: 26, name: 'Entradas' },
                { value: 22, name: 'Despejes' },
                { value: 18, name: 'Duelos' },
                { value: 16, name: 'Faltas' },
                { value: 14, name: 'Goles' }
            ]
        }
    ]
};

option && myChart.setOption(option);