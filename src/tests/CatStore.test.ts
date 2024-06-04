import { mountSuspended } from "@nuxt/test-utils/runtime";
import { expect, it, describe, beforeEach, vi } from "vitest";
import { useCatStore } from '@/stores/catStore'
import { createTestingPinia } from '@pinia/testing'
import {setActivePinia, createPinia} from "pinia"


describe('catStore', () => {
    beforeEach(() => {
        // creates a fresh pinia and makes it active
        // so it's automatically picked up by any useStore() call
        // without having to pass it to it: `useStore(pinia)`
        setActivePinia(createPinia())
      })


  it('fetches cats and stores into the cat state', async () => {
    const store = useCatStore()
    await store.fetchCats()

    expect(store.cats.length).toBe(10)
  })
  it('Check if the cat fact is a string', async () => {
    const store = useCatStore()
    await store.fetchCats()

    expect(store.cats.every(cat => typeof cat === 'string')).toBe(true);

  })

  
})





