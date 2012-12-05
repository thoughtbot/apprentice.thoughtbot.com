module ApplicationHelper
  def meta_keywords
    if content_for?(:meta_keywords)
      content_for(:meta_keywords)
    else
      'web design, web development, training, ruby, rails, boston, new york, san francisco, stockholm, boulder, denver'
    end
  end

  def body_id
    content_for?(:keyword) ? content_for(:keyword) : params[:id].parameterize
  end

  def jobs_meta_keywords
    'web designer, web developer, ruby, rails, javascript, html, css, boston, san francisco, stockholm, denver, boulder'
  end

  def jobs_meta_description
    'Work at thoughtbot.'
  end

  def portfolio_meta_keywords
    'web design, web development, portfolio'
  end

  def portfolio_meta_description
    'A selection of our work.'
  end
end
