//animation speed
let delayTime = 800; // (l speed laslenia)
document.addEventListener("DOMContentLoaded", function() {
	const speed1Button = document.getElementById("speed1Button");
	const speed2Button = document.getElementById("speed2Button");
	const speed0Button = document.getElementById("speed0Button");

	speed0Button.addEventListener("click", () => {
		delayTime = delayTime*2;
		console.log(delayTime);
	});

	speed2Button.addEventListener("click", () => {
		delayTime = delayTime/2;
		console.log(delayTime);
	});

	speed1Button.addEventListener("click", () => {
		delayTime = 550;
		console.log(delayTime);
	});
});

toul_rect=300;
if (window.innerWidth < 768) {
	toul_rect=230;
}else(toul_rect=300)

//kaddeh mn élt fl array
function chiffre(f) {
	return /^(0?[2-9]|[1-9][0-9])$/.test(f);
}
//fill array bl random nums
function fill(nb) {
	let array = [];
	let length = nb;
	for (let i = 0; i < length; i++) {
		let randomNumber = Math.floor(Math.random() * 100) + 1;
		array.push(randomNumber);
	}
	return array;
}
//verifi w fill array
function VerifandFill() {
	var f = document.getElementById("numE").value;
	if (!chiffre(f)) {
		alert("Enter a number between 2 & 99");
	}
	let array = fill(f);
	return array;
}

async function bubbleSort(arr) {
	let isSortingComplete = false;
	for (var i = 0; i < arr.length; i++) {
		let swapped = false;
		for (var j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				var temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				swapped = true;
			}
			createRectanglesBS(arr, j, j + 1, isSortingComplete, i);
			await new Promise((resolve) => setTimeout(resolve, delayTime));
		}
		if (!swapped) break;
	}
	isSortingComplete = true;
	createRectanglesBS(arr, -1, -1, isSortingComplete, arr.length);
}

function createRectanglesBS(
	array,
	movingIndex1,
	movingIndex2,
	isSortingComplete,
	finalPosition
) {
	const rectangleContainer = document.getElementById("rectangleContainer");
	rectangleContainer.innerHTML = "";

	for (let i = 0; i < array.length; i++) {
		const value = array[i];
		const rectangle = document.createElement("div");

		if (i === movingIndex1 || i === movingIndex2) {
			rectangle.classList.add("rectangle", "moving-rectangle");
		} else if (i >= array.length - finalPosition) {
			rectangle.classList.add("rectangle", "end-rectangle");
		} else {
			rectangle.classList.add("rectangle");
		}

		const height = (value / 100) * toul_rect;
		rectangle.style.height = height + "px";
		rectangle.textContent = value;

		rectangleContainer.appendChild(rectangle);
	}
}

async function selectionSort(arr) {
	let isSortingComplete = false;
	for (var i = 0; i < arr.length; i++) {
		let min = i;
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[min] > arr[j]) {
				min = j;
				createRectanglesSS(arr, i, j, isSortingComplete);
				await new Promise((resolve) => setTimeout(resolve, delayTime));
			}
		}
		if (i != min) {
			const oldPosI = i * 30;
			const oldPosMin = min * 30;
			[arr[i], arr[min]] = [arr[min], arr[i]];

			createRectanglesSS(arr, i, min, isSortingComplete, oldPosI, oldPosMin);
			await new Promise((resolve) => setTimeout(resolve, delayTime));
		}
	}
	isSortingComplete = true;
	createRectanglesSS(arr, -1, -1, isSortingComplete);
	isSortingComplete = false;

	return arr;
}

async function createRectanglesSS(
	array,
	currentIndex,
	movingIndex,
	isSortingComplete,
	oldPosI = -1,
	oldPosMin = -1
) {
	const rectangleContainer = document.getElementById("rectangleContainer");
	rectangleContainer.innerHTML = "";

	for (let i = 0; i < array.length; i++) {
		const value = array[i];
		const rectangle = document.createElement("div");

		if (i === currentIndex) {
			rectangle.style.left = oldPosI !== -1 ? `${oldPosI}px` : `${i * 30}px`;
			rectangle.classList.add("rectangle", "moving-rectangle");
		} else if (i === movingIndex) {
			rectangle.style.left =
				oldPosMin !== -1 ? `${oldPosMin}px` : `${i * 30}px`;
			rectangle.classList.add("rectangle", "moving-rectangle");
		} else if (i <= currentIndex) {
			rectangle.style.left = `${i * 30}px`;
			rectangle.classList.add("rectangle", "end-rectangle");
		} else {
			rectangle.style.left = `${i * 30}px`;
			rectangle.classList.add("rectangle");
		}

		if (isSortingComplete) {
			rectangle.style.backgroundColor = "#06bb00";
			console.log("Sorting complete");
		}

		const height = (value / 100) * toul_rect;
		rectangle.style.height = height + "px";
		rectangle.textContent = value;

		rectangleContainer.appendChild(rectangle);
	}

	rectangleContainer.addEventListener(
		"transitionend",
		function adjustAfterTransition() {
			for (let i = 0; i < array.length; i++) {
				const rectangle = rectangleContainer.children[i];
				rectangle.style.left = `${i * 30}px`;
			}
			rectangleContainer.removeEventListener(
				"transitionend",
				adjustAfterTransition
			);
		}
	);
}


async function insertionSort(arr) {
	let isSortingComplete = false;
	for (let i = 1; i < arr.length; i++) {
		let key = arr[i];
		let j = i - 1;
		while (j >= 0 && arr[j] > key) {
			arr[j + 1] = arr[j];
			createRectanglesIS(arr, j, j + 1);
			await new Promise((resolve) => setTimeout(resolve, delayTime));
			j--;
		}
		arr[j + 1] = key;
	}
	isSortingComplete = true;
	createRectanglesIS(arr, -1, -1, isSortingComplete);
}

async function insertionSort(arr) {
	let isSortingComplete = false;
	for (let i = 1; i < arr.length; i++) {
		let key = arr[i];
		let j = i - 1;
		while (j >= 0 && arr[j] > key) {
			arr[j + 1] = arr[j];
			createRectanglesIS(arr, j, j + 1);
			await new Promise((resolve) => setTimeout(resolve, delayTime));
			j--;
		}
		arr[j + 1] = key;
	}
	isSortingComplete = true;
	createRectanglesIS(arr, -1, -1, isSortingComplete);
	isSortingComplete = false;
}

function createRectanglesIS(
	array,
	currentIndex,
	nextIndex,
	isSortingComplete = false
) {
	const rectangleContainer = document.getElementById("rectangleContainer");
	rectangleContainer.innerHTML = "";

	for (let i = 0; i < array.length; i++) {
		const value = array[i];
		const rectangle = document.createElement("div");

		if (i === currentIndex || i === nextIndex) {
			rectangle.classList.add("rectangle", "moving-rectangle");
		} else if (i < currentIndex) {
			rectangle.classList.add("rectangle", "end-rectangle");
		} else {
			rectangle.classList.add("rectangle");
		}

		if (isSortingComplete) {
			rectangle.style.backgroundColor = "#06bb00";
			console.log("Sorting complete");
		}

		const height = (value / 100) * toul_rect;
		rectangle.style.height = `${height}px`;
		rectangle.textContent = value;

		rectangleContainer.appendChild(rectangle);
	}
}

async function mergeSort(arr, l = 0, r = arr.length - 1) {
	let isSortingComplete = false;

	if (l < r) {
		const m = Math.floor(l + (r - l) / 2);
		await mergeSort(arr, l, m);
		await mergeSort(arr, m + 1, r);
		await merge(arr, l, m, r);
		createRectanglesMS(arr, l, r, isSortingComplete);
		await new Promise((resolve) => setTimeout(resolve, delayTime));
	}
	isSortingComplete = true;
	createRectanglesMS(arr, -1, -1, isSortingComplete);
	isSortingComplete = false;
}

async function merge(arr, l, m, r) {
	let n1 = m - l + 1;
	let n2 = r - m;

	let L = new Array(n1);
	let R = new Array(n2);

	for (let i = 0; i < n1; i++) L[i] = arr[l + i];
	for (let j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

	let i = 0;
	let j = 0;
	let k = l;

	while (i < n1 && j < n2) {
		if (L[i] <= R[j]) {
			arr[k] = L[i];
			i++;
		} else {
			arr[k] = R[j];
			j++;
		}
		k++;
	}

	while (i < n1) {
		arr[k] = L[i];
		i++;
		k++;
	}

	while (j < n2) {
		arr[k] = R[j];
		j++;
		k++;
	}
}

function createRectanglesMS(array, l, r, isSortingComplete) {
	const rectangleContainer = document.getElementById("rectangleContainer");

	// Check if rectangleContainer exists
	if (!rectangleContainer) {
		console.error("rectangleContainer not found in the DOM.");
		return;
	}

	rectangleContainer.innerHTML = "";

	for (let i = 0; i < array.length; i++) {
		const value = array[i];
		const rectangle = document.createElement("div");

		if (i >= l && i <= r) {
			rectangle.classList.add("rectangle", "moving-rectangle");
		} else {
			rectangle.classList.add("rectangle");
		}

		if (isSortingComplete) {
			rectangle.style.backgroundColor = "#06bb00";
			console.log("Sorting complete");
		}

		const height = (value / 100) * toul_rect;
		rectangle.style.height = `${height}px`;
		rectangle.textContent = value;

		rectangleContainer.appendChild(rectangle);
	}
}

async function quickSort(arr, low = 0, high = arr.length - 1) {
	let isSortingComplete = false;
	if (low < high) {
		let pi = await partition(arr, low, high);
		await quickSort(arr, low, pi - 1);
		await quickSort(arr, pi + 1, high);
	}
	if (low === 0 && high === arr.length - 1) {
		isSortingComplete = true;
		createRectanglesQS(arr, -1, -1, isSortingComplete);
	}
}

async function partition(arr, low, high) {
	let pivot = arr[high];
	let i = low - 1;
	for (let j = low; j <= high - 1; j++) {
		if (arr[j] < pivot) {
			i++;
			[arr[i], arr[j]] = [arr[j], arr[i]];
			createRectanglesQS(arr, i, j);
			await new Promise((resolve) => setTimeout(resolve, delayTime));
		}
	}
	[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
	return i + 1;
}

function createRectanglesQS(
	array,
	pivotIndex,
	currentIndex,
	isSortingComplete = false
) {
	const rectangleContainer = document.getElementById("rectangleContainer");

	rectangleContainer.innerHTML = "";

	for (let i = 0; i < array.length; i++) {
		const value = array[i];
		const rectangle = document.createElement("div");
		rectangle.classList.add("rectangle");

		if (i === pivotIndex) {
			rectangle.classList.add("pivot-rectangle");
		} else if (i === currentIndex) {
			rectangle.classList.add("current-rectangle");
		}

		if (isSortingComplete) {
			rectangle.style.backgroundColor = "#06bb00";
			console.log("Sorting complete");
		}

		const height = (value / 100) * toul_rect;
		rectangle.style.height = `${height}px`;
		rectangle.textContent = value;

		rectangleContainer.appendChild(rectangle);
	}
}
async function heapSort(arr) {
	let n = arr.length;
	let isSortingComplete = false;

	for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
		await heapify(arr, n, i);
	}

	for (let i = n - 1; i >= 0; i--) {
		[arr[0], arr[i]] = [arr[i], arr[0]];
		await heapify(arr, i, 0);
	}
  isSortingComplete = true;

	createRectanglesHS(arr, -1, -1, isSortingComplete);
	isSortingComplete = false;
}

async function heapify(arr, n, i) {
	let largest = i;
	let l = 2 * i + 1;
	let r = 2 * i + 2;

	if (l < n && arr[l] > arr[largest]) {
		largest = l;
	}

	if (r < n && arr[r] > arr[largest]) {
		largest = r;
	}

	if (largest !== i) {
		[arr[i], arr[largest]] = [arr[largest], arr[i]];
		createRectanglesHS(arr, i, largest);
		await new Promise((resolve) => setTimeout(resolve, delayTime));
		await heapify(arr, n, largest);
	}
}

function createRectanglesHS(array, currentIndex, largestIndex, isSortingComplete) {
	const rectangleContainer = document.getElementById("rectangleContainer");
	rectangleContainer.innerHTML = "";

	for (let i = 0; i < array.length; i++) {
		const value = array[i];
		const rectangle = document.createElement("div");

		if (i === currentIndex || i === largestIndex) {
			rectangle.classList.add("rectangle", "moving-rectangle");
		} else {
			rectangle.classList.add("rectangle");
		}
		if (isSortingComplete) {
			rectangle.style.backgroundColor = "#06bb00";
		}

		const height = (value / 100) * toul_rect;
		rectangle.style.height = `${height}px`;
		rectangle.textContent = value;

		rectangleContainer.appendChild(rectangle);
	}
}

async function radixSort(arr) {
	let max = Math.max(...arr);
	let isSortingComplete = false;

	const maxDigits = Math.floor(Math.log10(max)) + 1;

	for (let exp = 1; exp <= Math.pow(10, maxDigits - 1); exp *= 10) {
		await countingSortByDigit(arr, exp, isSortingComplete);
		await new Promise((resolve) => setTimeout(resolve, delayTime)); 
	}

	isSortingComplete = true;
	createRectanglesRS(arr, -1, -1, isSortingComplete); 
}
async function countingSortByDigit(arr, exp, isSortingComplete) {
	let output = Array(arr.length).fill(0);
	let count = Array(10).fill(0);

	for (let i = 0; i < arr.length; i++) {
		count[Math.floor(arr[i] / exp) % 10]++;
	}

	for (let i = 1; i < count.length; i++) {
		count[i] += count[i - 1];
	}

	for (let i = arr.length - 1; i >= 0; i--) {
		output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
		count[Math.floor(arr[i] / exp) % 10]--;
	}

	for (let i = 0; i < arr.length; i++) {
		arr[i] = output[i];
		createRectanglesRS(arr, i, -1, isSortingComplete); 
		await new Promise((resolve) => setTimeout(resolve, delayTime)); 
	}
}

function createRectanglesRS(array, currentIndex, largestIndex, isSortingComplete) {
	console.log("createRectanglesRS called with currentIndex:", currentIndex);
	console.log("isSortingComplete:", isSortingComplete);
	const rectangleContainer = document.getElementById("rectangleContainer");
	rectangleContainer.innerHTML = "";

	for (let i = 0; i < array.length; i++) {
		const value = array[i];
		const rectangle = document.createElement("div");

		if (i === currentIndex || i === largestIndex) {
			rectangle.classList.add("rectangle", "moving-rectangle");
		} else {
			rectangle.classList.add("rectangle");
		}

		if (isSortingComplete) {
			rectangle.style.backgroundColor = "#06bb00";
		}

		const height = (value / 100) * toul_rect;
		rectangle.style.height = `${height}px`;
		rectangle.textContent = value;

		rectangleContainer.appendChild(rectangle);
	}
}


let isAlgorithmShown = false;

document.getElementById('infoL').addEventListener('click', () => {
	isAlgorithmShown = !isAlgorithmShown;
	updateInfoCardContent();
});

async function Start() {
	document.getElementById('S2').style.display = 'block';


	const title = document.getElementById("infocard-title");
	const textContent = document.getElementById("infocard-text");

	let pressed = true;
	if (pressed) {
		document.getElementById("playButton").disabled = true;
	}

	let array = VerifandFill();
	var ty = document.getElementById("SA").value;
	updateInfoCardContent();

	if (ty == "Bubble") {
		await bubbleSort(array);
		document.getElementById("playButton").disabled = false;

	} else if (ty == "Selection") {
		await selectionSort(array);
		document.getElementById("playButton").disabled = false;

	} else if (ty == "Insertion") {
		insertionSort(array);
		document.getElementById("playButton").disabled = false;

	} else if (ty == "Merge") {
		mergeSort(array);
		document.getElementById("playButton").disabled = false;

	} else if (ty == "Quick") {
		quickSort(array);
		document.getElementById("playButton").disabled = false;

	} else if (ty == "Heap") {
		heapSort(array);
		document.getElementById("playButton").disabled = false;

	} else if (ty == "Radix") {
		radixSort(array);
		document.getElementById("playButton").disabled = false;
	}
	updateInfoCardContent();

}

function updateInfoCardContent() {
	const title = document.getElementById("infocard-title");
	const textContent = document.getElementById("infocard-text");
	const ty = document.getElementById("SA").value;

	let explanation = "";
	let algorithm = "";

	if (ty == "Bubble") {
		explanation = `In bubble sort, the algorithm traverses the list multiple times, and during each traversal, it compares adjacent elements and swaps them if they are in the wrong order. This process continues until no more swaps are needed, indicating that the list is sorted. The algorithm gets its name because smaller elements "bubble" to their correct positions with each traversal.`;
		algorithm = `function bubbleSort(arr){
  let n = arr.length;
  for(let i = 0; i < n-1; i++){
    for(let j = 0; j < n-i-1; j++){
      if(arr[j] > arr[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
  return arr;
}`;
	} else if (ty == "Selection") {
		explanation = "Selection sort works by dividing the list into a sorted and an unsorted region. The algorithm repeatedly selects the smallest (or largest) element from the unsorted region and swaps it with the first element in the unsorted region.";
		algorithm = `function selectionSort(arr){
  let n = arr.length;
  for(let i = 0; i < n-1; i++){
    let minIdx = i;
    for(let j = i+1; j < n; j++){
      if(arr[j] < arr[minIdx]){
        minIdx = j;
      }
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}`;
	} else if (ty == "Insertion") {
		explanation = "Insertion sort builds a sorted list one element at a time by repeatedly picking the next element from the unsorted region and inserting it into its correct position in the sorted region.";
		algorithm = `function insertionSort(arr){
  let n = arr.length;
  for(let i = 1; i < n; i++){
    let key = arr[i];
    let j = i - 1;
    while(j >= 0 && arr[j] > key){
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}`;
	} else if (ty == "Merge") {
		explanation = "Merge sort is a divide-and-conquer algorithm that divides the list into smaller pieces, sorts each piece separately, and then merges the sorted pieces back together.";
		algorithm = `function mergeSort(arr){
  if(arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right){
  let result = [];
  while(left.length && right.length){
    if(left[0] < right[0]){
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left, right);
}`;
	} else if (ty == "Quick") {
		explanation = `Quick sort is also a divide-and-conquer algorithm. It works by selecting a "pivot" element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.`;
		algorithm = `function quickSort(arr, low = 0, high = arr.length - 1){
  if(low < high){
    let pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
  return arr;
}

function partition(arr, low, high){
  let pivot = arr[high];
  let i = low - 1;
  for(let j = low; j <= high - 1; j++){
    if(arr[j] < pivot){
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}`;
	} else if (ty == "Heap") {
		explanation = "Heap sort first builds a max-heap from the input array, then repeatedly extracts the maximum element from the heap and swaps it with the last unsorted element, effectively moving it to its correct position in the sorted region.";
		algorithm = `function heapSort(arr){
  let n = arr.length;
  for(let i = Math.floor(n / 2) - 1; i >= 0; i--){
    heapify(arr, n, i);
  }
  for(let i = n - 1; i > 0; i--){
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
  return arr;
}

function heapify(arr, n, i){
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  if(left < n && arr[left] > arr[largest]){
    largest = left;
  }
  if(right < n && arr[right] > arr[largest]){
    largest = right;
  }
  if(largest != i){
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}`;
	} else if (ty == "Radix") {
		explanation = " Radix sort is a non-comparative sorting algorithm that works by distributing elements into buckets according to their individual digits, which are processed from the least significant to the most significant digit.";
		algorithm = `function radixSort(arr){
  let maxNum = Math.max(...arr);
  let maxDigits = maxNum.toString().length;
  for(let i = 0; i < maxDigits; i++){
    let buckets = Array.from({length: 10}, () => []);
    for(let j = 0; j < arr.length; j++){
      let digit = Math.floor(arr[j] / Math.pow(10, i)) % 10;
      buckets[digit].push(arr[j]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}`;
	}

	title.innerHTML = `${ty} Sort`;
	textContent.innerHTML = isAlgorithmShown ? `<h2>Algorithm</h2><pre>${algorithm}</pre>` : `<h2>Explanation</h2>${explanation}`;
}
