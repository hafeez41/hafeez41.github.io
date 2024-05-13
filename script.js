// script for skills page
document.querySelectorAll('.skill').forEach(function(el) {
    let percent = el.getAttribute('data-percent');
    let svg = `<svg class="circular-chart" viewBox="0 0 36 36">
        <path class="circle-bg"
            d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path class="circle"
            stroke-dasharray="${percent}, 100"
            d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            style="stroke: hsl(${percent + 100}, 70%, 50%);"
        />
        <text x="18" y="20.35" class="percentage" fill="#333" font-size="4" text-anchor="middle">${percent}%</text>
    </svg>`;
    el.innerHTML = svg + '<div class="text-center mt-2 font-bold">' + el.getAttribute('data-name') + '</div>';
});
// script for skills page

