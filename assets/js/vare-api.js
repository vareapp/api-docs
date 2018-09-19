document.querySelectorAll(".language-request").forEach((element) => {
	let html = element.innerHTML;
	const parts = html.split(" ");
	const method = parts.shift();
	html = `<span class="${method.toLowerCase()}">${method}</span> ${parts.join(" ")}`;
	html = html.replace(/{(.+)\|(.+)}/g, '<span class="variable"><div class="tooltip">{$1}<div class="tooltiphover">$2</div></div></span>');
	element.innerHTML = html;
});