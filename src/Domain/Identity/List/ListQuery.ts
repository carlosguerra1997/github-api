import { ListField } from '@domain/Identity/List/ListField'
import { ListQueryPayload } from '@domain/Identity/List/ListQueryPayload'
import { ListFilter } from '@domain/Identity/List/ListFilter'

const DEFAULT_QUERY_MAPPING = {
  limit: 'per_page',
  page: 'page',
  direction: 'direction',
  sort: 'sort'
}

export class ListQuery {
  public filters: Map<string, string>

  constructor() {
    this.filters = new Map<string, string>()
  }

  static parse(payload: ListQueryPayload, mapping: any = {}): ListQuery {
    const query = new ListQuery()

    this.parseFilters(payload, DEFAULT_QUERY_MAPPING, query)
    this.parseFilters(payload, mapping, query)

    return query
  }

  static parseFilters(payload: ListQueryPayload, mapping: any, query: ListQuery): void {
    Object.keys(mapping)
      .filter(name => !!payload[name])
      .forEach(name => {
        const field = ListField.parse(mapping[name])
        const value = payload[name]
        const filter = new ListFilter(field.name, value)
        query.add(filter)
      })
  }

  add(field: ListFilter): void {
    if (field.isValid()) {
      this.filters.set(field.name, field.value)
    }
  }
}