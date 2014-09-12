module ApplicationHelper
  def meta_keywords
    if content_for?(:meta_keywords)
      content_for(:meta_keywords)
    else
      'web design, web development, training, ruby, rails, ios, python, django, javascript, boston, new york, san francisco, stockholm, boulder, denver'
    end
  end

  def body_id
    content_for?(:keyword) ? content_for(:keyword) : params[:id].parameterize
  end

  def jobs_meta_keywords
    'web designer, web developer, ruby, rails, javascript, python, django, html, css, boston, san francisco, stockholm, denver, boulder'
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

  def learn_prime_url
    "https://learn.thoughtbot.com/prime#{utm_parameters}"
  end

  def metis_rails_url
    "http://www.thisismetis.com/ruby-on-rails#{utm_parameters}"
  end

  def metis_design_url
    "http://www.thisismetis.com/ux-front-end-development#{utm_parameters}"
  end

  def utm_parameters
    '?utm_source=apprenticeio&utm_medium=tracks&utm_campaign=apprenticeio'
  end
end
