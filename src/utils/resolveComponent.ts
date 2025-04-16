export async function resolveComponent(type: string) {
    switch (type) {
      case 'header':
        return (await import('../components/blocks/header.astro')).default;
      case 'breadcrumbs':
            return (await import('../components/blocks/breadcrumbs.astro')).default;
      case 'product':
            return (await import('../components/blocks/product.astro')).default;
      case 'categories':
            return (await import('../components/blocks/categories.astro')).default;
      case 'indicators':
            return (await import('../components/blocks/indicators.astro')).default;
      case 'dnatest':
            return (await import('../components/blocks/dnatest.astro')).default;
      case 'report':
            return (await import('../components/blocks/report.astro')).default;
      case 'videos':
            return (await import('../components/blocks/videos.astro')).default;
      case 'howItWorks':
            return (await import('../components/blocks/howItWorks.astro')).default;
      
      case 'whyWe':
            return (await import('../components/blocks/whyWe.astro')).default;

            

      case 'prsMethod':
            return (await import('../components/blocks/prsMethod.astro')).default;
      case 'questions':
            return (await import('../components/blocks/questions.astro')).default;
      case 'otherTests':
            return (await import('../components/blocks/otherTests.astro')).default;
      case 'footer':
        return (await import('../components/blocks/footer.astro')).default;

        
      default:
        return null;
    }

  //  return (await import(`../components/blocks/${type}.astro`)).default;
  }
  