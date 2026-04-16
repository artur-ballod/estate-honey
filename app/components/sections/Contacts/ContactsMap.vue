<template>
	<div :class="['contacts-map', className]">
		<div ref="mapRoot" class="contacts-map__root" />
	</div>
</template>

<script setup lang="ts">
	import { onBeforeUnmount, onMounted, ref } from 'vue'
	import { useRuntimeConfig } from '#imports'
	import { loadYandexMaps } from '~/lib/load-yandex-maps'
	import { CONTACTS_MAP_CUSTOMIZATION } from './map-theme'
	import type { ContactsMapProps } from './map.types'

	const props = withDefaults(defineProps<ContactsMapProps>(), {
		zoom: 16,
		markerLabel: '',
		className: '',
		theme: 'light',
	})

	const runtimeConfig = useRuntimeConfig()
	const mapRoot = ref<HTMLDivElement | null>(null)

	let mapInstance: any = null
	let markerInstance: any = null

	const createMarkerElement = () => {
		const marker = document.createElement('div')
		marker.className = 'contacts-map__marker'

		const pin = document.createElement('div')
		pin.className = 'contacts-map__marker-pin'

		const dot = document.createElement('div')
		dot.className = 'contacts-map__marker-dot'

		pin.appendChild(dot)
		marker.appendChild(pin)

		if (props.markerLabel) {
			const label = document.createElement('span')
			label.className = 'contacts-map__marker-label'
			label.textContent = props.markerLabel
			marker.appendChild(label)
		}

		return marker
	}

	const initMap = async () => {
		if (!mapRoot.value) return

		const ymaps3 = await loadYandexMaps(runtimeConfig.public.yandexMapsApiKey)

		const {
			YMap,
			YMapMarker,
			YMapDefaultSchemeLayer,
			YMapDefaultFeaturesLayer,
		} = ymaps3

		const schemeLayer = new YMapDefaultSchemeLayer({
			// theme: props.theme,
			customization: CONTACTS_MAP_CUSTOMIZATION,
		})

		mapInstance = new YMap(
			mapRoot.value,
			{
				location: {
					center: props.coords,
					zoom: props.zoom,
				},
			},
			[
				schemeLayer,
				new YMapDefaultFeaturesLayer({}),
			]
		)

		markerInstance = new YMapMarker(
			{
				coordinates: props.coords,
			},
			createMarkerElement()
		)

		mapInstance.addChild(markerInstance)
	}

	onMounted(() => {
		void initMap()
	})

	onBeforeUnmount(() => {
		if (mapInstance && markerInstance) {
			try {
				mapInstance.removeChild(markerInstance)
			} catch {
				//
			}
		}

		if (mapInstance) {
			try {
				mapInstance.destroy()
			} catch {
				//
			}
		}

		mapInstance = null
		markerInstance = null
	})
</script>

<style scoped lang="scss">
	@use './contacts-map.scss';
</style>

<!-- <style scoped lang="scss">
.contacts-map {
	width: 100%;
	height: 100%;
	min-height: 32rem;
}

.contacts-map__root {
	width: 100%;
	height: 100%;
	min-height: 32rem;
	border-radius: 2rem;
	overflow: hidden;
}

:deep(.contacts-map__marker) {
	position: relative;
	display: inline-flex;
	flex-direction: column;
	align-items: center;
	transform: translate(-50%, -100%);
	pointer-events: auto;
}

:deep(.contacts-map__marker-pin) {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 4.8rem;
	height: 4.8rem;
	border-radius: 50% 50% 50% 0;
	transform: rotate(-45deg);
	background: #050042;
	box-shadow: 0 0.8rem 2.4rem rgba(5, 0, 66, 0.24);
}

:deep(.contacts-map__marker-dot) {
	width: 1.6rem;
	height: 1.6rem;
	border-radius: 50%;
	background: #ffffff;
	transform: rotate(45deg);
}

:deep(.contacts-map__marker-label) {
	margin-bottom: 0.8rem;
	padding: 0.8rem 1.2rem;
	border-radius: 999px;
	background: #ffffff;
	color: #050042;
	font-size: 1.2rem;
	line-height: 1;
	white-space: nowrap;
	box-shadow: 0 0.8rem 2.4rem rgba(5, 0, 66, 0.16);
	order: -1;
}
</style> -->