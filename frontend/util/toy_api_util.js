export const fetchToys = () => (
	$.ajax({
		method: 'GET',
		url: `api/toys`
	})
);

export const fetchToy = (id) => (
	$.ajax({
		method: 'GET',
		url: `api/toys/${id}`
	})
);

export const createToy = toy => (
	$.ajax({
		method: 'POST',
		url: `api/toys`,
		data: {toy}
	})
);

export const updateToy = toy => (
	$.ajax({
		method: 'PATCH',
		url: `api/toys/${toy.id}`,
		data: {toy}
	})
);

export const deleteToy = id => (
	$.ajax({
		method: 'DELETE',
		url: `api/toys/${id}`
	})
);
