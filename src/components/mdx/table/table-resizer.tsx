"use client";
import { useEffect } from 'react';
type Props = { tableId: string };
export default function MdxTableResizer({ tableId }: Props) {
	useEffect(() => {
	const table = document.getElementById(tableId) as HTMLTableElement | null;
	if (!table) throw new Error(`Table with id "${tableId}" not found.`);
	const tbl = table as HTMLTableElement;

	const EDGE_THRESHOLD = 6; // px

	// Ensure there's a colgroup that matches header cell count
	function ensureColGroup(): HTMLTableColElement[] {
		let colgroup = tbl.querySelector('colgroup');
		const headerRow = tbl.querySelector('thead tr') || tbl.querySelector('tr');
		const colsCount = headerRow ? headerRow.children.length : 0;

		if (!colgroup) {
			colgroup = document.createElement('colgroup');
			for (let i = 0; i < colsCount; i++) {
				const col = document.createElement('col');
				// default width from header cell if available
				const headerCell = headerRow?.children[i] as HTMLElement | undefined;
				const w = headerCell ? Math.round(headerCell.getBoundingClientRect().width) : 120;
				col.style.width = `${w}px`;
				colgroup.appendChild(col);
			}
				tbl.insertBefore(colgroup, tbl.firstChild);
		} else {
			// if existing colgroup has different length, normalize it
			const existing = Array.from(colgroup.children) as HTMLTableColElement[];
			if (existing.length !== colsCount) {
				// recreate
				const newCg = document.createElement('colgroup');
				for (let i = 0; i < colsCount; i++) {
					const col = document.createElement('col');
					const headerCell = headerRow?.children[i] as HTMLElement | undefined;
					const w = headerCell ? Math.round(headerCell.getBoundingClientRect().width) : 120;
					col.style.width = `${w}px`;
					newCg.appendChild(col);
				}
				colgroup.replaceWith(newCg);
				colgroup = newCg;
			}
		}

		return Array.from(colgroup.querySelectorAll('col')) as HTMLTableColElement[];
	}

	const cols = ensureColGroup();

	let hoverIndex: number | null = null;
	let isResizing = false;
	let startX = 0;
	let leftIndex = -1;
	let startLeftWidth = 0;
	let startRightWidth = 0;

	// overlay element to show interstice highlight
	const overlay = document.createElement('div');
	overlay.style.position = 'fixed';
	overlay.style.width = '4px';
	overlay.style.background = 'rgba(59,130,246,0.35)';
	overlay.style.pointerEvents = 'none';
	overlay.style.zIndex = '9999';
	overlay.style.display = 'none';
	document.body.appendChild(overlay);

	function setOverlayFromCellRect(rect: DOMRect | null) {
		if (!rect) return;
		const tableRect = tbl.getBoundingClientRect();
		// overlay spans the full table height, but positioned at the column edge
		overlay.style.left = `${rect.right - 2}px`;
		overlay.style.top = `${tableRect.top}px`;
		overlay.style.height = `${tableRect.height}px`;
		overlay.style.display = 'block';
	}

	function clearOverlay() {
		overlay.style.display = 'none';
	}

	function updateHover(clientX: number, clientY: number) {
		const el = document.elementFromPoint(clientX, clientY) as HTMLElement | null;
		if (!el) {
			hoverIndex = null;
			tbl.style.cursor = '';
			clearOverlay();
			return;
		}
		const cell = el.closest('td,th') as HTMLElement | null;
		if (!cell) {
			hoverIndex = null;
			tbl.style.cursor = '';
			clearOverlay();
			return;
		}
		const rect = cell.getBoundingClientRect();
		const distanceToRight = Math.abs(rect.right - clientX);
		if (distanceToRight <= EDGE_THRESHOLD) {
			const row = cell.parentElement as HTMLTableRowElement | null;
			if (!row) return;
			const idx = Array.prototype.indexOf.call(row.children, cell);
				hoverIndex = idx;
				tbl.style.cursor = 'col-resize';
				setOverlayFromCellRect(rect);
		} else {
			hoverIndex = null;
			tbl.style.cursor = '';
			clearOverlay();
		}
	}

	const onMouseMove = (ev: MouseEvent) => {
		if (isResizing) return;
		updateHover(ev.clientX, ev.clientY);
	};

	const onMouseDown = (ev: MouseEvent) => {
		if (hoverIndex === null) return;
		ev.preventDefault();
		isResizing = true;
		startX = ev.clientX;
		leftIndex = hoverIndex;
		const leftCol = cols[leftIndex] || null;
		const rightCol = cols[leftIndex + 1] || null;
		startLeftWidth = leftCol ? Math.round(leftCol.getBoundingClientRect().width) : 0;
		startRightWidth = rightCol ? Math.round(rightCol.getBoundingClientRect().width) : 0;

		const onMove = (e: MouseEvent) => {
			if (!isResizing) return;
			const delta = e.clientX - startX;
			const leftCol = cols[leftIndex] || null;
			const rightCol = cols[leftIndex + 1] || null;
			if (leftCol && rightCol) {
				const newLeft = Math.max(1, Math.round(startLeftWidth + delta));
				const newRight = Math.max(1, Math.round(startRightWidth - delta));
				leftCol.style.width = `${newLeft}px`;
				rightCol.style.width = `${newRight}px`;
			} else if (leftCol && !rightCol) {
				const newLeft = Math.max(1, Math.round(startLeftWidth + delta));
				leftCol.style.width = `${newLeft}px`;
			}

				// update overlay position based on header cell for the leftIndex
				const headerCell = tbl.querySelector(`tr`)?.children[leftIndex] as HTMLElement | undefined;
			if (headerCell) setOverlayFromCellRect(headerCell.getBoundingClientRect());
		};

		const onUp = () => {
			isResizing = false;
			leftIndex = -1;
				window.removeEventListener('mousemove', onMove);
				window.removeEventListener('mouseup', onUp);
				tbl.style.cursor = '';
			clearOverlay();
		};

		window.addEventListener('mousemove', onMove);
		window.addEventListener('mouseup', onUp);
	};

	// touch support
	const onTouchMove = (ev: TouchEvent) => {
		const t = ev.touches[0];
		if (!t) return;
		if (isResizing) return;
		updateHover(t.clientX, t.clientY);
	};

	const onTouchStart = (ev: TouchEvent) => {
		const t = ev.touches[0];
		if (!t) return;
		if (hoverIndex === null) return;
		ev.preventDefault();
		isResizing = true;
		startX = t.clientX;
		leftIndex = hoverIndex;
		const leftCol = cols[leftIndex] || null;
		const rightCol = cols[leftIndex + 1] || null;
		startLeftWidth = leftCol ? Math.round(leftCol.getBoundingClientRect().width) : 0;
		startRightWidth = rightCol ? Math.round(rightCol.getBoundingClientRect().width) : 0;

		const onMove = (e: TouchEvent) => {
			const tt = e.touches[0];
			if (!tt) return;
			const delta = tt.clientX - startX;
			const leftCol = cols[leftIndex] || null;
			const rightCol = cols[leftIndex + 1] || null;
			if (leftCol && rightCol) {
				const newLeft = Math.max(1, Math.round(startLeftWidth + delta));
				const newRight = Math.max(1, Math.round(startRightWidth - delta));
				leftCol.style.width = `${newLeft}px`;
				rightCol.style.width = `${newRight}px`;
			} else if (leftCol && !rightCol) {
				const newLeft = Math.max(1, Math.round(startLeftWidth + delta));
				leftCol.style.width = `${newLeft}px`;
			}

			const headerCell = tbl.querySelector(`tr`)?.children[leftIndex] as HTMLElement | undefined;
			if (headerCell) setOverlayFromCellRect(headerCell.getBoundingClientRect());
		};

		const onEnd = () => {
			isResizing = false;
			leftIndex = -1;
			window.removeEventListener('touchmove', onMove);
			window.removeEventListener('touchend', onEnd);
			table.style.cursor = '';
			clearOverlay();
		};

		window.addEventListener('touchmove', onMove, { passive: false });
		window.addEventListener('touchend', onEnd);
	};

		tbl.addEventListener('mousemove', onMouseMove);
		tbl.addEventListener('mousedown', onMouseDown);
		tbl.addEventListener('touchmove', onTouchMove, { passive: true });
		tbl.addEventListener('touchstart', onTouchStart, { passive: false });

	return () => {
		tbl.removeEventListener('mousemove', onMouseMove);
		tbl.removeEventListener('mousedown', onMouseDown);
		tbl.removeEventListener('touchmove', onTouchMove as EventListener);
		tbl.removeEventListener('touchstart', onTouchStart as EventListener);
		if (overlay.parentElement) overlay.parentElement.removeChild(overlay);
	};
	}, [tableId]);

	return null;
}
